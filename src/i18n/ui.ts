export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export const defaultLang = 'de';

export type Lang = keyof typeof languages;

export const ui = {
  de: {
    'meta.home.title': 'GoToDACH: Markteintritt und Vertrieb im DACH-Raum',
    'meta.home.description':
      'GoToDACH hilft Unternehmen, im DACH-Raum zu verkaufen: Markteintritt, Vertriebsaufbau und die passenden Vertriebsleute.',
    'nav.goToMarket': 'Go-to-Market',
    'nav.renewable': 'Renewable Energy',
    'nav.talent': 'Talent',
    'nav.about': 'Über Temo',
    'nav.contact': 'Kontakt',
    'nav.skip': 'Zum Inhalt springen',
    'lang.switch': 'Sprache wechseln',
    'home.lead':
      'Sie wollen nach Deutschland, Österreich und in die Schweiz. Wir zeigen Ihnen den Weg dorthin und stellen die Leute, die dort verkaufen.',
    'home.cta': 'Erstgespräch vereinbaren',
    'home.pillar.gtm.title': 'Go-to-Market',
    'home.pillar.gtm.text': 'Markteintritt und Vertriebsaufbau im DACH-Raum für B2B- und SaaS-Firmen.',
    'home.pillar.renewable.title': 'Renewable Energy',
    'home.pillar.renewable.text': 'Markteintritt für Solar, Wind und Speicher, mit den Besonderheiten dieser Branche.',
    'home.pillar.talent.title': 'Talent',
    'home.pillar.talent.text': 'B2B-Tech-Sales-Profis für Ihr Team, vermittelt auf Erfolgsbasis.',
    'home.about.title': 'Über Temo',
    'home.about.text': 'Teimuraz „Temo“ Gogodze, Frankfurt am Main.',
    'home.about.link': 'Mehr über Temo',
    'home.contact.title': 'Schreiben Sie uns',
    'home.contact.text': 'Erzählen Sie kurz, was Sie vorhaben. Temo meldet sich persönlich.',
    'home.contact.mail': 'temo@gotodach.com',
    'gtm.meta.title': 'Go-to-Market: Markteintritt und Vertriebsaufbau im DACH-Raum',
    'gtm.meta.description':
      'Markteintritt und Vertriebsaufbau im DACH-Raum für B2B- und SaaS-Firmen: Märkte prüfen, Vertrieb aufbauen, die richtigen Leute finden.',
    'ren.meta.title': 'Renewable Energy: Markteintritt in den DACH-Raum',
    'ren.meta.description':
      'Markteintritt in den DACH-Raum für Solar-, Wind- und Speicherfirmen: Märkte prüfen, Vertrieb aufbauen, die richtigen Leute finden.',
    'service.cta.heading': 'Erstgespräch',
    'about.meta.title': 'Über Temo: Teimuraz Gogodze, GoToDACH',
    'about.meta.description':
      'Teimuraz „Temo“ Gogodze, Inhaber von GoToDACH in Frankfurt am Main: Werdegang und Arbeitsweise.',
    'about.contact.title': 'Mit Temo sprechen',
    'about.contact.text': 'Schreiben Sie kurz, woran Sie gerade arbeiten. Temo antwortet persönlich.',
    'talent.meta.title': 'GoToDACH Talent: Vertriebsprofis für den DACH-Raum',
    'talent.meta.description':
      'GoToDACH Talent vermittelt B2B-Tech-Vertriebsprofis an Firmen im DACH-Raum, auf Erfolgsbasis.',
    'talent.h1': 'Vertriebsprofis aus dem B2B-Tech-Umfeld, vermittelt auf Erfolgsbasis.',
    'talent.intro':
      'GoToDACH Talent sucht Vertriebsleute mit B2B-Tech-Erfahrung für Firmen im DACH-Raum.',
    'talent.model.title': 'Vermittlung auf Erfolgsbasis',
    'talent.cta.title': 'Kontakt',
    'talent.cta.text': 'Schreiben Sie uns, ob Sie suchen oder gesucht werden. Temo antwortet persönlich.',
    'contact.meta.title': 'Kontakt: GoToDACH',
    'contact.meta.description':
      'Kontakt zu GoToDACH in Frankfurt am Main: E-Mail an Temo oder Erstgespräch vereinbaren.',
    'contact.h1': 'Schreiben Sie uns kurz, was Sie vorhaben.',
    'contact.lede': 'Temo antwortet persönlich.',
    'contact.mail.title': 'Per E-Mail',
    'contact.mail.text':
      'Nennen Sie, welches Produkt oder welche Leistung im Mittelpunkt steht, in welchen Ländern Sie verkaufen wollen und was Sie in den nächsten Monaten erreichen möchten.',
    'contact.talent.text':
      'Suchen Sie Vertriebsleute oder suchen Sie selbst eine Stelle? Schreiben Sie das dazu.',
    'contact.call.title': 'Erstgespräch',
    'contact.call.text': 'Ein Erstgespräch vereinbaren Sie per E-Mail.',
    'imprint.meta.title': 'Impressum: GoToDACH',
    'imprint.meta.description': 'Impressum von GoToDACH, Frankfurt am Main.',
    'privacy.meta.title': 'Datenschutz: GoToDACH',
    'privacy.meta.description': 'Datenschutzerklärung von GoToDACH.',
    'footer.legal': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.rights': 'GoToDACH, Frankfurt am Main',
  },
  en: {
    'meta.home.title': 'GoToDACH: Market entry and sales in the DACH region',
    'meta.home.description':
      'GoToDACH helps companies sell in the DACH region: market entry, building sales teams, and finding the right salespeople.',
    'nav.goToMarket': 'Go-to-market',
    'nav.renewable': 'Renewable energy',
    'nav.talent': 'Talent',
    'nav.about': 'About Temo',
    'nav.contact': 'Contact',
    'nav.skip': 'Skip to content',
    'lang.switch': 'Change language',
    'home.lead':
      'You want to sell in Germany, Austria and Switzerland. We show you the way there and bring the people who sell it.',
    'home.cta': 'Book an intro call',
    'home.pillar.gtm.title': 'Go-to-market',
    'home.pillar.gtm.text': 'Market entry and sales build-up in the DACH region for B2B and SaaS companies.',
    'home.pillar.renewable.title': 'Renewable energy',
    'home.pillar.renewable.text': 'Market entry for solar, wind and storage, with the specifics of this industry.',
    'home.pillar.talent.title': 'Talent',
    'home.pillar.talent.text': 'B2B tech sales professionals for your team, placed on a success-fee basis.',
    'home.about.title': 'About Temo',
    'home.about.text': 'Teimuraz “Temo” Gogodze, Frankfurt am Main.',
    'home.about.link': 'More about Temo',
    'home.contact.title': 'Write to us',
    'home.contact.text': 'Tell us briefly what you are planning. Temo replies personally.',
    'home.contact.mail': 'temo@gotodach.com',
    'gtm.meta.title': 'Go-to-market: market entry and sales build-up in the DACH region',
    'gtm.meta.description':
      'Market entry and sales build-up in the DACH region for B2B and SaaS companies: check markets, build the sales team, find the right people.',
    'ren.meta.title': 'Renewable energy: market entry into the DACH region',
    'ren.meta.description':
      'Market entry into the DACH region for solar, wind and storage companies: check markets, build sales, find the right people.',
    'service.cta.heading': 'First call',
    'about.meta.title': 'About Temo: Teimuraz Gogodze, GoToDACH',
    'about.meta.description':
      'Teimuraz “Temo” Gogodze, owner of GoToDACH in Frankfurt am Main: background and way of working.',
    'about.contact.title': 'Talk to Temo',
    'about.contact.text': 'Briefly tell us what you are working on right now. Temo replies personally.',
    'talent.meta.title': 'GoToDACH Talent: sales professionals for the DACH region',
    'talent.meta.description':
      'GoToDACH Talent places B2B tech sales professionals with companies in the DACH region, on a success-fee basis.',
    'talent.h1': 'Sales professionals from the B2B tech world, placed on a success-fee basis.',
    'talent.intro':
      'GoToDACH Talent looks for sales people with B2B tech experience for companies in the DACH region.',
    'talent.model.title': 'Placement on a success-fee basis',
    'talent.cta.title': 'Contact',
    'talent.cta.text':
      'Write to us whether you are looking for someone or looking for a role. Temo replies personally.',
    'contact.meta.title': 'Contact: GoToDACH',
    'contact.meta.description': 'Contact GoToDACH in Frankfurt am Main: email Temo or book an intro call.',
    'contact.h1': 'Tell us briefly what you have in mind.',
    'contact.lede': 'Temo replies personally.',
    'contact.mail.title': 'By email',
    'contact.mail.text':
      'Name the product or service at the center, the countries you want to sell in, and what you want to achieve in the next months.',
    'contact.talent.text': 'Are you looking for salespeople, or for a role yourself? Mention that in your message.',
    'contact.call.title': 'Intro call',
    'contact.call.text': 'You arrange an intro call by email.',
    'imprint.meta.title': 'Legal notice: GoToDACH',
    'imprint.meta.description': 'Legal notice of GoToDACH, Frankfurt am Main.',
    'privacy.meta.title': 'Privacy: GoToDACH',
    'privacy.meta.description': 'Privacy policy of GoToDACH.',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy',
    'footer.rights': 'GoToDACH, Frankfurt am Main',
  },
} as const;
