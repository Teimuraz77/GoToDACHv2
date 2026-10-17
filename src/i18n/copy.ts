// Seitentexte aus INHALTE.md. Rechtsangaben-Platzhalter bleiben sichtbar.
// Alle anderen offenen Punkte stehen als HTML-Kommentar in den jeweiligen Komponenten.
// EN-Texte sind Übersetzungen der deutschen Fassung und warten auf Prüfung durch Temo.
import type { Lang } from './ui';

export interface Package {
  title: string;
  meta?: string;
  items: string[];
  result?: string;
}

export interface Section {
  title: string;
  paragraphs: string[];
}

export interface ServicePage {
  headline: string;
  problem: string;
  packages: Package[];
  prices: string;
  cta: string;
}

export interface Copy {
  about: {
    headline: string;
    intro: string[];
    bringTitle: string;
    bring: string[];
    wayTitle: string;
    way: string;
  };
  gtm: ServicePage;
  ren: ServicePage;
  talent: {
    feeText: string;
  };
  imprint: {
    h1: string;
    lead: string;
    sections: Section[];
  };
  privacy: {
    h1: string;
    sections: Section[];
  };
  legalNotice: string;
}

export const copy: Record<Lang, Copy> = {
  de: {
    about: {
      headline: 'Ich bin Temo. Ich verkaufe Software – und helfe anderen, es in DACH auch zu tun.',
      intro: [
        'Teimuraz Gogodze, alle sagen Temo. Ich sitze in Frankfurt und mache B2B-Vertrieb, vor allem für SaaS.',
        'Das heißt: Erstgespräche, die keiner annehmen will, Einkaufsabteilungen mit drei Freigabeschleifen und Deals, die im letzten Quartal doch noch rutschen. Ich weiß, wie der DACH-Markt kauft – langsam, gründlich, mit Vertrag auf Deutsch – und wie man trotzdem vorankommt.',
      ],
      bringTitle: 'Was ich mitbringe',
      bring: [
        'B2B-SaaS-Vertrieb von der Akquise bis zum Abschluss',
      ],
      wayTitle: 'Wie ich arbeite',
      way: 'Direkt, ohne Folienschlacht. Erst verstehen, was Sie verkaufen und an wen. Dann ein Plan, der in eine Seite passt. Dann umsetzen – und messen, ob es funktioniert. Wenn etwas nicht passt, sage ich das früh. Das spart uns beiden Geld.',
    },
    gtm: {
      headline: 'In DACH verkaufen. Ohne zwei Jahre Lehrgeld.',
      problem:
        'Der DACH-Markt ist groß, zahlungskräftig – und eigen. Wer mit dem US- oder UK-Playbook kommt, lernt schnell: Hier entscheiden Gremien, Datenschutz ist kein Fußnotenthema, und „Let’s hop on a call“ ersetzt keine deutsche Vertragsfassung.',
      packages: [
        {
          title: 'Paket 1 – Markt-Check',
          meta: '(ca. 2–3 Wochen)',
          items: [
            'Zielmarkt, Zielkunden und Wettbewerb in DACH',
            'Was am Produkt/Angebot für DACH angepasst werden muss (Sprache, Verträge, DSGVO, Preise)',
          ],
          result: 'Ergebnis: klare Go/No-Go-Empfehlung mit den ersten Zielsegmenten',
        },
        {
          title: 'Paket 2 – Go-to-Market-Plan',
          meta: '(ca. 4–6 Wochen)',
          items: [
            'Positionierung und Messaging auf Deutsch',
            'Vertriebsweg: direkt, Partner oder beides',
            'Zielkundenliste, Outreach-Sequenzen, Pricing-Empfehlung',
          ],
          result: 'Ergebnis: ein umsetzbarer 90-Tage-Plan',
        },
        {
          title: 'Paket 3 – Vertriebsaufbau / Interim Sales DACH',
          meta: '(ab 3 Monate)',
          items: [
            'Ich übernehme den Vertrieb in DACH auf Zeit: Pipeline aufbauen, erste Kunden gewinnen',
            'Prozesse und CRM so aufsetzen, dass ein festes Team übernehmen kann',
            'Auf Wunsch: Besetzung des Teams über GoToDACH Talent',
          ],
        },
      ],
      prices: 'Preise: auf Anfrage.',
      cta: 'Erstgespräch vereinbaren – 30 Minuten, kostenlos, ohne Pitch-Deck-Pflicht.',
    },
    ren: {
      headline: 'Erneuerbare für den DACH-Markt. Mit jemandem, der den Vertrieb kennt.',
      problem:
        'Deutschland, Österreich und die Schweiz bauen Solar, Speicher und Wind massiv aus. Für Hersteller und Anbieter von außen heißt das: großer Markt, viel Regulierung, eigene Vertriebskanäle über Großhandel, Installateure und EPCs.',
      packages: [
        {
          title: 'Paket 1 – Markt-Check Renewables',
          items: [
            'Zielsegmente (z. B. Gewerbe-PV, Heimspeicher, Großprojekte) und relevante Kanäle',
            'Überblick über Zertifizierungen, Normen und Förderlogik, die für Ihr Produkt relevant sind – mit Fachpartnern, wo nötig',
          ],
          result: 'Ergebnis: Einstiegsstrategie und Prioritäten',
        },
        {
          title: 'Paket 2 – Kanal- und Partneraufbau',
          items: [
            'Ansprache von Distributoren, Großhändlern, Installateuren und EPC-Partnern',
            'Vorbereitung und Begleitung von Fachmessen',
            'Partnerverträge und Konditionen strukturieren (juristische Prüfung durch Fachanwalt)',
          ],
        },
        {
          title: 'Paket 3 – Interim Sales DACH für Renewables',
          items: [
            'Wie Go-to-Market Paket 3, mit Fokus auf Partnervertrieb',
            'Vertriebsleute über GoToDACH Talent',
          ],
        },
      ],
      prices: 'Preise: auf Anfrage.',
      cta: 'Erstgespräch vereinbaren',
    },
    talent: {
      feeText:
        'Sie zahlen nur bei Erfolg. Das Honorar richtet sich nach dem Jahreszielgehalt und wird in zwei Raten fällig: die erste kurz nach Arbeitsantritt, die zweite nach drei Monaten. Geht die Person vorher, entfällt die zweite Rate. Konditionen besprechen wir im Erstgespräch.',
    },
    imprint: {
      h1: 'Impressum',
      lead: 'Angaben gemäß § 5 DDG',
      sections: [
        {
          title: 'Anbieter',
          paragraphs: [
            '[TODO: Anbieter – Firmenname bzw. Inhaber und Rechtsform, z. B. „Teimuraz Gogodze, GoToDACH (Einzelunternehmen)“]',
            'Schlossstraße 28',
            '60486 Frankfurt am Main',
            'Deutschland',
          ],
        },
        {
          title: 'Kontakt',
          paragraphs: [
            'Telefon: [TODO: Telefonnummer – öffentlich zeigen ja/nein?]',
            'E-Mail: temo@gotodach.com',
          ],
        },
        {
          title: 'Umsatzsteuer-ID',
          paragraphs: ['Umsatzsteuer-ID gemäß § 27a UStG: [TODO: USt-IdNr. oder Zeile streichen]'],
        },
        {
          title: 'Verantwortlich für den Inhalt',
          paragraphs: ['Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Teimuraz Gogodze, Anschrift wie oben'],
        },
        {
          title: 'Haftung für Inhalte und Links',
          paragraphs: [
            'Inhalte wurden mit Sorgfalt erstellt; für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr. Für Inhalte externer Links sind deren Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir entsprechende Inhalte umgehend.',
          ],
        },
      ],
    },
    privacy: {
      h1: 'Datenschutzerklärung',
      sections: [
        {
          title: '1. Verantwortlicher',
          paragraphs: [
            '[TODO: wie Anbieter im Impressum], Schlossstraße 28, 60486 Frankfurt am Main, temo@gotodach.com',
          ],
        },
        {
          title: '2. Hosting',
          paragraphs: [
            'Diese Website wird bei [TODO: Netlify Inc. / Cloudflare Inc.] gehostet. Beim Aufruf werden technisch notwendige Daten (IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser) in Server-Logfiles verarbeitet, um die Website auszuliefern und abzusichern. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Der Anbieter sitzt in den USA; die Übermittlung stützt sich auf das EU-US Data Privacy Framework bzw. Standardvertragsklauseln. [TODO: mit Auftragsverarbeitungsvertrag des Hosters abgleichen]',
          ],
        },
        {
          title: '3. Keine Cookies, kein Tracking',
          paragraphs: [
            'Diese Website setzt keine Cookies und verwendet keine Analyse- oder Marketing-Tools. Schriften werden lokal ausgeliefert.',
          ],
        },
        {
          title: '4. Kontakt per E-Mail oder Telefon',
          paragraphs: [
            'Wenn Sie uns kontaktieren, verarbeiten wir Ihre Angaben, um die Anfrage zu bearbeiten (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Die Daten werden gelöscht, sobald sie nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.',
          ],
        },
        {
          title: '5. Terminbuchung',
          paragraphs: [
            '[TODO: nur falls Calendly o. Ä. verlinkt wird]',
            'Für Termine verlinken wir auf [Anbieter]. Erst beim Klick gelten dessen Datenschutzbestimmungen.',
          ],
        },
        {
          title: '6. Bewerberdaten (GoToDACH Talent)',
          paragraphs: [
            'Wenn Sie uns Lebenslauf oder Profil schicken, verarbeiten wir diese Daten, um Ihnen passende Unternehmen vorzuschlagen. An Unternehmen geben wir Ihr Profil nur mit Ihrer ausdrücklichen Zustimmung weiter (Art. 6 Abs. 1 lit. a und b DSGVO). Ohne Vermittlung löschen wir Ihre Daten spätestens nach [TODO: z. B. 12 Monaten], sofern Sie nicht länger zustimmen.',
          ],
        },
        {
          title: '7. Deine Rechte',
          paragraphs: [
            'Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO); Widerruf einer Einwilligung jederzeit mit Wirkung für die Zukunft. Anfrage genügt an temo@gotodach.com.',
          ],
        },
        {
          title: '8. Beschwerderecht',
          paragraphs: [
            'Sie können sich bei einer Aufsichtsbehörde beschweren, z. B. beim Hessischen Beauftragten für Datenschutz und Informationsfreiheit (HBDI), Wiesbaden.',
          ],
        },
      ],
    },
    legalNotice: '',
  },
  en: {
    about: {
      headline: 'I am Temo. I sell software, and I help others do it in DACH too.',
      intro: [
        'Teimuraz Gogodze, everyone says Temo. I am based in Frankfurt and do B2B sales, mostly for SaaS.',
        'That means first calls nobody wants to take, buying committees with three approval loops, and deals that slip into the last quarter anyway. I know how the DACH market buys: slowly, thoroughly, with contracts in German. And I know how to make progress anyway.',
      ],
      bringTitle: 'What I bring',
      bring: [
        'B2B SaaS sales from prospecting to closing',
      ],
      wayTitle: 'How I work',
      way: 'Direct, without slide battles. First understand what you sell and to whom. Then a plan that fits on one page. Then implement, and measure whether it works. If something does not fit, I say so early. That saves us both money.',
    },
    gtm: {
      headline: 'Selling in DACH. Without two years of learning the hard way.',
      problem:
        'The DACH market is big, has money, and is its own thing. Anyone who brings the US or UK playbook learns quickly: committees make the decisions here, data protection is not a footnote, and “Let’s hop on a call” does not replace a German contract.',
      packages: [
        {
          title: 'Package 1 – Market check',
          meta: '(approx. 2–3 weeks)',
          items: [
            'Target market, target customers and competition in DACH',
            'What needs adapting in the product/offer for DACH (language, contracts, GDPR, pricing)',
          ],
          result: 'Result: a clear go/no-go recommendation with the first target segments',
        },
        {
          title: 'Package 2 – Go-to-market plan',
          meta: '(approx. 4–6 weeks)',
          items: [
            'Positioning and messaging in German',
            'Sales route: direct, partners, or both',
            'Target account list, outreach sequences, pricing recommendation',
          ],
          result: 'Result: an actionable 90-day plan',
        },
        {
          title: 'Package 3 – Sales build-up / interim sales DACH',
          meta: '(from 3 months)',
          items: [
            'I take over sales in DACH on an interim basis: build the pipeline, win the first customers',
            'Set up processes and CRM so that a permanent team can take over',
            'On request: staffing the team via GoToDACH Talent',
          ],
        },
      ],
      prices: 'Prices: on request.',
      cta: 'Book an intro call – 30 minutes, free, no pitch deck required.',
    },
    ren: {
      headline: 'Renewables for the DACH market. With someone who knows sales.',
      problem:
        'Germany, Austria and Switzerland are expanding solar, storage and wind massively. For manufacturers and providers from abroad, that means: a large market, a lot of regulation, and sales channels of their own via wholesalers, installers and EPCs.',
      packages: [
        {
          title: 'Package 1 – Renewables market check',
          items: [
            'Target segments (e.g. commercial PV, home storage, large projects) and relevant channels',
            'Overview of certifications, standards and funding logic relevant to your product – with specialist partners where needed',
          ],
          result: 'Result: entry strategy and priorities',
        },
        {
          title: 'Package 2 – Channel and partner build-up',
          items: [
            'Approaching distributors, wholesalers, installers and EPC partners',
            'Preparing and supporting trade fairs',
            'Structuring partner contracts and terms (legal review by a specialist lawyer)',
          ],
        },
        {
          title: 'Package 3 – Interim sales DACH for renewables',
          items: [
            'As go-to-market package 3, focused on partner sales',
            'Salespeople via GoToDACH Talent',
          ],
        },
      ],
      prices: 'Prices: on request.',
      cta: 'Book an intro call',
    },
    talent: {
      feeText:
        'You only pay on success. The fee is based on the annual target salary and is due in two instalments: the first shortly after the start date, the second after three months. If the person leaves before then, the second instalment is dropped. We discuss the terms in the intro call.',
    },
    imprint: {
      h1: 'Legal notice',
      lead: '',
      sections: [],
    },
    privacy: {
      h1: 'Privacy policy',
      sections: [],
    },
    legalNotice: 'Legal notice and privacy policy are available in German only; the German version is legally binding.',
  },
};
