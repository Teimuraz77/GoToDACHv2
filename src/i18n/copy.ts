// Seitentexte aus INHALTE.md. Rechtsangaben-Platzhalter bleiben sichtbar.
// Alle anderen offenen Punkte stehen als HTML-Kommentar in den jeweiligen Komponenten.
// EN-Texte sind Übersetzungen der deutschen Fassung und warten auf Prüfung durch Temo.
import type { Lang } from './ui';
import { copyRu } from './locales/ru';

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
  topic: string;
}

export interface Copy {
  about: {
    headline: string;
    intro: string[];
    bringTitle: string;
    bring: string[];
    stationsTitle: string;
    stations: { label: string; title: string; text: string }[];
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
  legalNoticeLink: string;
}

export const copy: Record<Lang, Copy> = {
  de: {
    about: {
      headline: 'Ich bin Temo. Ich verkaufe Software – und helfe anderen, es in DACH auch zu tun.',
      intro: [
        'Teimuraz Gogodze, alle sagen Temo. Ich sitze in Frankfurt und mache seit mehr als 15 Jahren B2B-Vertrieb, vor allem für SaaS.',
        'In dieser Zeit habe ich ziemlich viel gesehen: Konzerne wie IBM und Salesforce, in denen ein Deal durch mehr Freigaben geht als ein Bauantrag. Und mein eigenes erstes Startup in Georgien, bei dem jeder Fehler direkt auf dem eigenen Konto landet.',
        'Das heißt: Erstgespräche, die keiner annehmen will, Einkaufsabteilungen mit drei Freigabeschleifen und Deals, die im letzten Quartal doch noch rutschen. Ich weiß, wie der DACH-Markt kauft – langsam, gründlich, mit Vertrag auf Deutsch – und wie man trotzdem vorankommt.',
      ],
      bringTitle: 'Was ich mitbringe',
      bring: [
        'Mehr als 15 Jahre B2B-Vertrieb, vor allem SaaS – von der Kaltakquise bis zur Unterschrift',
        'Beide Welten: Enterprise-Vertrieb im Konzern und ein eigenes Startup mit eigenem Team',
        'Sprachen: Deutsch, Englisch, Russisch',
      ],
      stationsTitle: 'Stationen',
      stations: [
        {
          label: 'Konzern',
          title: 'IBM und Salesforce',
          text: 'Vertrieb bei zwei der bekanntesten Namen der Softwarebranche. Dort lernt man Forecasts, Account-Pläne und Einkaufsabteilungen mit mehr Fragen als Budget. Vor allem aber lernt man, warum große Kunden so kaufen, wie sie kaufen – und wie man trotzdem zum Abschluss kommt.',
        },
        {
          label: 'Gründer',
          title: 'Deals Team, Georgien',
          text: 'Mein erstes eigenes Startup: ein Boutique-Callcenter für B2B. Akquise im Auftrag anderer Firmen, jeden Tag, mit eigenem Team. Nichts lehrt schneller, was ein Lead wirklich wert ist, als wenn man ihn selbst bezahlen muss.',
        },
        {
          label: 'Heute',
          title: 'GoToDACH',
          text: 'Heute verbinde ich beides: die Disziplin aus dem Konzern und das Tempo aus dem Startup. Für Firmen, die in Deutschland, Österreich und der Schweiz verkaufen wollen, und für die Vertriebsleute, die das für sie tun. Nebenbei baue ich eigene Produkte wie CoRe, eine Compliance-as-a-Service-Lösung für NIS2.',
        },
      ],
      wayTitle: 'Wie ich arbeite',
      way: 'Direkt, ohne Folienschlacht. Erst verstehen, was Sie verkaufen und an wen. Dann ein Plan, der in eine Seite passt. Dann umsetzen – und messen, ob es funktioniert. Wenn etwas nicht passt, sage ich das früh. Das spart uns beiden Geld.',
    },
    gtm: {
      topic: 'gtm',
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
      topic: 'renewable',
      headline: 'Erneuerbare Energie aus Deutschland für Zentralasien. Wir bauen die Brücke.',
      problem:
        'Fortschritt braucht Partner: Technologie, Know-how und Unternehmen, die bleiben. Deutsche Mittelständler und Konzerne bringen genau das mit – aber selten das Netzwerk vor Ort. GoToDACH verbindet beide Seiten. Wir helfen deutschen Unternehmen, in Zentralasien Fuß zu fassen, arbeiten dafür eng mit Universitäten in der Region zusammen und bringen die richtigen Leute auf unseren Konferenzen an einen Tisch.',
      packages: [
        {
          title: 'Markteintritt Zentralasien',
          items: [
            'Welche Länder und Segmente zu Ihrem Angebot passen – von Solar und Wind über Speicher bis Netztechnik',
            'Partner, Entscheider und Rahmenbedingungen vor Ort',
            'Begleitung bei den ersten Gesprächen und Projekten',
          ],
          result: 'Ergebnis: ein klarer Plan, wo und mit wem Sie starten',
        },
        {
          title: 'Universitäten als Partner',
          items: [
            'Kooperationen mit Universitäten vor Ort',
            'Zugang zu Fachkräften und Nachwuchs für Ihre Projekte in der Region',
            'Wissenstransfer, der Ihr Unternehmen dort bekannt macht, bevor der erste Vertrieb anklopft',
          ],
        },
        {
          title: 'Konferenzen und Netzwerk',
          items: [
            'Wir veranstalten Konferenzen, die deutsche Unternehmen, Hochschulen und Entscheider aus der Region zusammenbringen',
            'Auftritt als Partner oder Sprecher',
            'Gespräche mit möglichen Kunden und Partnern, die sonst Monate an Anlauf brauchen',
          ],
        },
      ],
      prices: 'Konditionen: auf Anfrage.',
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
            'Teimuraz Gogodze, GoToDACH (Einzelunternehmen)',
            'Schlossstraße 28',
            '60486 Frankfurt am Main',
            'Deutschland',
          ],
        },
        {
          title: 'Kontakt',
          paragraphs: [
            'Telefon: +49 172 319 61 88',
            'E-Mail: temo@gotodach.com',
          ],
        },
        {
          title: 'Umsatzsteuer-ID',
          paragraphs: ['Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE813113094'],
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
            'Teimuraz Gogodze, GoToDACH (Einzelunternehmen), Schlossstraße 28, 60486 Frankfurt am Main, temo@gotodach.com',
          ],
        },
        {
          title: '2. Hosting',
          paragraphs: [
            'Diese Website wird bei Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA, gehostet. Beim Aufruf werden technisch notwendige Daten (IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser) in Server-Logfiles verarbeitet, um die Website auszuliefern und abzusichern. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Mit Netlify besteht ein Auftragsverarbeitungsvertrag (Data Processing Addendum). Netlify ist unter dem EU-US Data Privacy Framework zertifiziert; die Übermittlung in die USA stützt sich auf diesen Angemessenheitsbeschluss. Weitere Informationen: https://www.netlify.com/privacy/',
          ],
        },
        {
          title: '3. Keine Cookies, kein Tracking',
          paragraphs: [
            'Diese Website setzt keine Cookies und verwendet keine Analyse- oder Marketing-Tools. Schriften werden lokal ausgeliefert.',
          ],
        },
        {
          title: '4. Kontaktformular, E-Mail und Telefon',
          paragraphs: [
            'Wenn Sie das Kontaktformular nutzen, verarbeiten wir Ihre Angaben (Name, E-Mail-Adresse, optional Firma, Anliegen und Nachricht), um Ihre Anfrage zu beantworten. Das Formular wird über den Formulardienst unseres Hosters Netlify verarbeitet: Netlify speichert die Einsendung und leitet sie per E-Mail an uns weiter. Es gilt der unter Ziffer 2 genannte Auftragsverarbeitungsvertrag.',
            'Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben ebenfalls nur zur Bearbeitung der Anfrage.',
            'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag zielt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden gelöscht, sobald sie nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen. Einsendungen im Formulardienst löschen wir, sobald die Anfrage erledigt ist.',
          ],
        },
        // ENTWURF zur rechtlichen Prüfung (Okt. 2026): Abschnitt zum Formular "market-intelligence". Nicht ungeprüft veröffentlichen.
        {
          title: '5. Anfrageformular für Erstgespräche (Marktanalyse und Vertriebspipeline)',
          paragraphs: [
            'Wenn Sie über das Formular auf der Seite „Marktanalyse und Vertriebspipeline“ ein Erstgespräch anfragen, verarbeiten wir folgende Angaben: Name, geschäftliche E-Mail-Adresse, Firma, Zielmarkt und die Leistung, für die Sie sich interessieren. Außerdem wird erfasst, aus welcher Sprachfassung der Seite Sie das Formular gesendet haben.',
            'Wir nutzen diese Angaben nur, um Ihre Anfrage zu beantworten, das Erstgespräch vorzubereiten und einen Termin mit Ihnen zu vereinbaren.',
            'Das Formular wird über den Formulardienst unseres Hosters Netlify verarbeitet: Netlify speichert die Einsendung und leitet sie per E-Mail an uns weiter. Es gelten der Auftragsverarbeitungsvertrag und die Zertifizierung unter dem EU-US Data Privacy Framework, die unter Ziffer 2 genannt sind.',
            'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen auf Ihre Anfrage), im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Einsendungen im Formulardienst löschen wir, sobald die Anfrage erledigt ist. Kommt kein Auftrag zustande, löschen wir die übrigen Angaben spätestens [TODO: Frist festlegen, z. B. 6 Monate] nach dem letzten Kontakt, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.',
          ],
        },
        {
          title: '6. Bewerberdaten (GoToDACH Talent)',
          paragraphs: [
            'Wenn Sie uns Lebenslauf oder Profil schicken, verarbeiten wir diese Daten, um Ihnen passende Unternehmen vorzuschlagen. An Unternehmen geben wir Ihr Profil nur mit Ihrer ausdrücklichen Zustimmung weiter (Art. 6 Abs. 1 lit. a und b DSGVO). Ohne Vermittlung löschen wir Ihre Daten spätestens nach 12 Monaten, sofern Sie nicht länger zustimmen.',
          ],
        },
        {
          title: '7. Ihre Rechte',
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
    legalNoticeLink: '',
  },
  en: {
    about: {
      headline: 'I am Temo. I sell software, and I help others do it in DACH too.',
      intro: [
        'Teimuraz Gogodze, everyone says Temo. I am based in Frankfurt and have been doing B2B sales for more than 15 years, mostly for SaaS.',
        'In that time I have seen quite a lot: corporations like IBM and Salesforce, where a deal goes through more approvals than a planning application. And my own first startup in Georgia, where every mistake lands straight on your own account.',
        'That means first calls nobody wants to take, buying committees with three approval loops, and deals that slip into the last quarter anyway. I know how the DACH market buys: slowly, thoroughly, with contracts in German. And I know how to make progress anyway.',
      ],
      bringTitle: 'What I bring',
      bring: [
        'More than 15 years of B2B sales, mostly SaaS – from cold outreach to signature',
        'Both worlds: enterprise sales in a corporation and a startup of my own with my own team',
        'Languages: German, English, Russian',
      ],
      stationsTitle: 'Career',
      stations: [
        {
          label: 'Corporate',
          title: 'IBM and Salesforce',
          text: 'Sales at two of the best-known names in software. That is where you learn forecasts, account plans and procurement departments with more questions than budget. Above all, you learn why large customers buy the way they do – and how to get to a signature anyway.',
        },
        {
          label: 'Founder',
          title: 'Deals Team, Georgia',
          text: 'My first startup of my own: a boutique B2B call center. Prospecting on behalf of other companies, every day, with my own team. Nothing teaches you faster what a lead is really worth than having to pay for it yourself.',
        },
        {
          label: 'Today',
          title: 'GoToDACH',
          text: 'Today I combine both: corporate discipline and startup speed. For companies that want to sell in Germany, Austria and Switzerland, and for the salespeople who do it for them. On the side I build my own products, such as CoRe, a compliance-as-a-service solution for NIS2.',
        },
      ],
      wayTitle: 'How I work',
      way: 'Direct, without slide battles. First understand what you sell and to whom. Then a plan that fits on one page. Then implement, and measure whether it works. If something does not fit, I say so early. That saves us both money.',
    },
    gtm: {
      topic: 'gtm',
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
      topic: 'renewable',
      headline: 'Renewable energy from Germany for Central Asia. We build the bridge.',
      problem:
        'Progress needs partners: technology, know-how and companies that stay. German mid-sized companies and corporations bring exactly that – but rarely the network on the ground. GoToDACH connects both sides. We help German companies gain a foothold in Central Asia, work closely with universities in the region, and bring the right people to one table at our conferences.',
      packages: [
        {
          title: 'Market entry Central Asia',
          items: [
            'Which countries and segments fit your offering – from solar and wind to storage and grid technology',
            'Partners, decision-makers and conditions on the ground',
            'Support in the first meetings and projects',
          ],
          result: 'Result: a clear plan for where and with whom to start',
        },
        {
          title: 'Universities as partners',
          items: [
            'Cooperation with local universities',
            'Access to skilled professionals and young talent for your projects in the region',
            'Knowledge transfer that makes your company known there before sales comes knocking',
          ],
        },
        {
          title: 'Conferences and network',
          items: [
            'We organise conferences that bring together German companies, universities and decision-makers from the region',
            'Appearances as a partner or speaker',
            'Conversations with potential customers and partners that would otherwise take months to set up',
          ],
        },
      ],
      prices: 'Terms: on request.',
      cta: 'Book an intro call',
    },
    talent: {
      feeText:
        'You only pay on success. The fee is based on the annual target salary and is due in two instalments: the first shortly after the start date, the second after three months. If the person leaves before then, the second instalment is dropped. We discuss the terms in the intro call.',
    },
    imprint: {
      h1: 'Legal notice',
      lead: 'Information pursuant to § 5 DDG (German Digital Services Act)',
      sections: [
        {
          title: 'Provider',
          paragraphs: [
            'Teimuraz Gogodze, GoToDACH (sole proprietorship)',
            'Schlossstraße 28',
            '60486 Frankfurt am Main',
            'Germany',
          ],
        },
        {
          title: 'Contact',
          paragraphs: ['Phone: +49 172 319 61 88', 'Email: temo@gotodach.com'],
        },
        {
          title: 'VAT ID',
          paragraphs: ['VAT identification number pursuant to § 27a UStG: DE813113094'],
        },
        {
          title: 'Responsible for content',
          paragraphs: ['Responsible for content pursuant to § 18 (2) MStV: Teimuraz Gogodze, address as above'],
        },
        {
          title: 'Liability for content and links',
          paragraphs: [
            'The content of this website was created with care; however, we accept no liability for its accuracy, completeness or timeliness. The operators of external websites are responsible for their content. If we become aware of any legal violations, we will remove the content concerned immediately.',
          ],
        },
      ],
    },
    privacy: {
      h1: 'Privacy policy',
      sections: [
        {
          title: '1. Controller',
          paragraphs: [
            'Teimuraz Gogodze, GoToDACH (sole proprietorship), Schlossstraße 28, 60486 Frankfurt am Main, Germany, temo@gotodach.com',
          ],
        },
        {
          title: '2. Hosting',
          paragraphs: [
            'This website is hosted by Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA. When you visit the website, technically necessary data (IP address, time, page visited, browser) is processed in server log files in order to deliver and secure the website. Legal basis: Art. 6 (1) (f) GDPR. We have concluded a data processing agreement (Data Processing Addendum) with Netlify. Netlify is certified under the EU-U.S. Data Privacy Framework; the transfer to the USA is based on this adequacy decision. More information: https://www.netlify.com/privacy/',
          ],
        },
        {
          title: '3. No cookies, no tracking',
          paragraphs: [
            'This website does not set any cookies and does not use any analytics or marketing tools. Fonts are served locally.',
          ],
        },
        {
          title: '4. Contact form, email and phone',
          paragraphs: [
            'If you use the contact form, we process your details (name, email address, optionally company, topic and message) in order to answer your request. The form is processed by the form service of our host Netlify: Netlify stores the submission and forwards it to us by email. The data processing agreement mentioned in section 2 applies.',
            'If you contact us by email or phone, we likewise process your details only to handle your request.',
            'The legal basis is Art. 6 (1) (b) GDPR where your request is aimed at a contract, otherwise Art. 6 (1) (f) GDPR (legitimate interest in answering requests). The data is deleted as soon as it is no longer required and no statutory retention obligations apply. We delete submissions in the form service once the request has been dealt with.',
          ],
        },
        // ENTWURF zur rechtlichen Prüfung (Okt. 2026): Abschnitt zum Formular "market-intelligence". Nicht ungeprüft veröffentlichen.
        {
          title: '5. Request form for scoping calls (Market intelligence & pipeline)',
          paragraphs: [
            'If you request a scoping call via the form on the "Market intelligence & pipeline" page, we process the following details: name, business email address, company, target market and the service you are interested in. We also record which language version of the page you sent the form from.',
            'We use these details only to answer your request, prepare the scoping call and arrange a date with you.',
            'The form is processed by the form service of our host Netlify: Netlify stores the submission and forwards it to us by email. The data processing agreement and the certification under the EU-U.S. Data Privacy Framework mentioned in section 2 apply.',
            'The legal basis is Art. 6 (1) (b) GDPR (steps prior to entering into a contract, taken at your request), otherwise Art. 6 (1) (f) GDPR (legitimate interest in answering requests). We delete submissions in the form service once the request has been dealt with. If no engagement follows, we delete the remaining details no later than [TODO: set period, e.g. 6 months] after the last contact, unless statutory retention obligations apply.',
          ],
        },
        {
          title: '6. Applicant data (GoToDACH Talent)',
          paragraphs: [
            'If you send us your CV or profile, we process this data in order to suggest suitable companies to you. We only pass your profile on to companies with your express consent (Art. 6 (1) (a) and (b) GDPR). If no placement takes place, we delete your data after 12 months at the latest, unless you consent to longer storage.',
          ],
        },
        {
          title: '7. Your rights',
          paragraphs: [
            'Access, rectification, erasure, restriction of processing, data portability and objection (Art. 15–21 GDPR); you can withdraw consent at any time with effect for the future. A request to temo@gotodach.com is sufficient.',
          ],
        },
        {
          title: '8. Right to lodge a complaint',
          paragraphs: [
            'You can lodge a complaint with a supervisory authority, e.g. the Hessian Commissioner for Data Protection and Freedom of Information (HBDI), Wiesbaden, Germany.',
          ],
        },
      ],
    },
    legalNotice: 'This is a translation for your convenience. In case of doubt, the German version is legally binding.',
    legalNoticeLink: 'German version',
  },
  ru: copyRu,
};
