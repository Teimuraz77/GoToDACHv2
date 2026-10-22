import { defaultLang, languages, ui, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first && first in languages && first !== defaultLang) return first as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: keyof (typeof ui)[typeof defaultLang]) => ui[lang][key] ?? ui[defaultLang][key];
}

// Slugs je Sprache. Englisch (Standard) liegt unter "/", jede weitere Sprache unter "/<code>/".
// Fehlt eine Sprache, gilt der englische Slug (z. B. /es/about, /ru/contact).
export const routes: Record<string, { en: string } & Partial<Record<Lang, string>>> = {
  home: { en: '', de: '' },
  gtm: { en: 'go-to-market', de: 'go-to-market' },
  talent: { en: 'talent', de: 'talent' },
  renewable: { en: 'renewable-energy', de: 'renewable-energy' },
  mi: { en: 'market-intelligence', de: 'market-intelligence' },
  about: { en: 'about', de: 'ueber-temo' },
  contact: { en: 'contact', de: 'kontakt' },
  imprint: { en: 'legal-notice', de: 'impressum' },
  privacy: { en: 'privacy', de: 'datenschutz' },
  thanks: { en: 'thanks', de: 'danke' },
};

// Sprachen, in die "Market Intelligence & Pipeline" schon übersetzt ist. Alle anderen Fassungen
// zeigen den englischen Text, stehen auf noindex und fehlen in Sitemap und hreflang.
// TODO: Sprachcode ergänzen, sobald die mi.*-Texte übersetzt und von Temo geprüft sind
// (dann auch den Sitemap-Filter in astro.config.mjs anpassen).
export const miTranslated: Lang[] = ['en'];

// Findet die Seite zu einem Slug aus irgendeiner Sprache und gibt den Slug in der Zielsprache zurück.
function translateSlug(slug: string, toLang: Lang) {
  const entry = Object.values(routes).find((r) => (Object.values(r) as string[]).includes(slug));
  return entry ? (entry[toLang] ?? entry.en) : slug;
}

// Pfad zu einer Seite in einer Sprache. Akzeptiert Slugs aus jeder Sprache, z. B. 'kontakt' oder 'contact'.
export function localePath(lang: Lang, path = '/') {
  const clean = path.replace(/^\/|\/$/g, '');
  const slug = translateSlug(clean, lang);
  if (lang === defaultLang) return `/${slug}`;
  return slug ? `/${lang}/${slug}` : `/${lang}/`;
}

// Pfad ohne Sprachpräfix, z. B. "/de/kontakt" -> "/kontakt".
export function stripLang(pathname: string) {
  const codes = Object.keys(languages).filter((l) => l !== defaultLang).join('|');
  return pathname.replace(new RegExp(`^/(${codes})(?=/|$)`), '') || '/';
}

// Pfad ohne Sprachpräfix in eine andere Sprache übertragen.
export function alternatePath(barePath: string, toLang: Lang) {
  return localePath(toLang, barePath);
}
