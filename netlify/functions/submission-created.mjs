// Netlify ruft diese Funktion automatisch nach jeder Formular-Einsendung auf,
// die den Spamfilter passiert hat ("submission-created"-Event).
// Sie legt den Kontakt in HubSpot an oder aktualisiert ihn (Abgleich über E-Mail)
// und hängt die Nachricht als Notiz an. Netlify behält die Einsendung zusätzlich als Backup.
//
// Voraussetzung: Umgebungsvariable HUBSPOT_TOKEN in Netlify (Private App in HubSpot,
// Berechtigungen crm.objects.contacts.read und crm.objects.contacts.write).
// Fehlt der Token, passiert nichts außer einem Log-Eintrag.

const API = 'https://api.hubapi.com';

// Feldnamen der Website-Formulare -> HubSpot-Eigenschaften
const LANGS = new Set(['en', 'de', 'ru']);
const INTERESTS = new Set([
  'snapshot', 'bronze', 'silver', 'gold', 'gtm', 'talent-hire', 'talent-job', 'renewable', 'other', 'unsure',
]);
const MARKETS = new Set(['dach', 'uzbekistan', 'central-asia-other', 'unsure']);
const FORMS = new Set(['kontakt', 'market-intelligence']);

const escape = (text) =>
  String(text).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

export function toHubSpot(formName, data) {
  const email = String(data.email ?? '').trim().toLowerCase();
  if (!email || data['bot-field']) return null;

  const [firstname, ...rest] = String(data.name ?? '').trim().split(/\s+/);
  const interest = data.anliegen ?? data.bedarf;
  const properties = {
    email,
    firstname: firstname || undefined,
    lastname: rest.join(' ') || undefined,
    company: data.firma?.trim() || undefined,
    hs_language: LANGS.has(data.sprache) ? data.sprache : undefined,
    gtd_website_source: FORMS.has(formName) ? formName : undefined,
    gtd_interest: INTERESTS.has(interest) ? interest : undefined,
    gtd_target_market: MARKETS.has(data.zielmarkt) ? data.zielmarkt : undefined,
  };
  for (const key of Object.keys(properties)) if (properties[key] === undefined) delete properties[key];

  const lines = [
    `Website-Formular: ${formName}`,
    data.anliegen && `Anliegen: ${data.anliegen}`,
    data.bedarf && `Bedarf: ${data.bedarf}`,
    data.zielmarkt && `Zielmarkt: ${data.zielmarkt}`,
    data.sprache && `Sprache: ${data.sprache}`,
    data.nachricht && `<br>${data.nachricht}`,
  ].filter(Boolean);

  // HubSpot zeigt Notizen als HTML: Eingaben escapen, Zeilenumbrüche als <br>.
  const note = lines.map((l) => escape(l).replace(/&lt;br&gt;/g, '<br>').replace(/\r?\n/g, '<br>')).join('<br>');
  return { email, properties, note };
}

async function hubspot(path, token, body) {
  const res = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`HubSpot ${path} ${res.status}: ${JSON.stringify(json)}`);
  return json;
}

export const handler = async (event) => {
  const token = process.env.HUBSPOT_TOKEN;
  if (!token) {
    console.log('HUBSPOT_TOKEN fehlt, Einsendung nicht an HubSpot übertragen.');
    return { statusCode: 200 };
  }

  const { payload } = JSON.parse(event.body ?? '{}');
  const lead = toHubSpot(payload?.form_name, payload?.data ?? {});
  if (!lead) return { statusCode: 200 };

  try {
    const upsert = await hubspot('/crm/v3/objects/contacts/batch/upsert', token, {
      inputs: [{ idProperty: 'email', id: lead.email, properties: lead.properties }],
    });
    const contactId = upsert.results?.[0]?.id;
    if (contactId) {
      // 202 = Standardverknüpfung Notiz -> Kontakt
      await hubspot('/crm/v3/objects/notes', token, {
        properties: { hs_timestamp: new Date().toISOString(), hs_note_body: lead.note },
        associations: [
          { to: { id: contactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }] },
        ],
      });
    }
  } catch (err) {
    // Einsendung ist in Netlify gespeichert; Fehler nur loggen, damit der Besucher nichts merkt.
    console.error(err);
  }
  return { statusCode: 200 };
};
