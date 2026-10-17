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
export const routes: Record<string, Record<Lang, string>> = {
  home: { en: '', de: '' },
  gtm: { en: 'go-to-market', de: 'go-to-market' },
  talent: { en: 'talent', de: 'talent' },
  renewable: { en: 'renewable-energy', de: 'renewable-energy' },
  about: { en: 'about', de: 'ueber-temo' },
  contact: { en: 'contact', de: 'kontakt' },
  imprint: { en: 'legal-notice', de: 'impressum' },
  privacy: { en: 'privacy', de: 'datenschutz' },
  thanks: { en: 'thanks', de: 'danke' },
};

// Findet die Seite zu einem Slug aus irgendeiner Sprache und gibt den Slug in der Zielsprache zurück.
function translateSlug(slug: string, toLang: Lang) {
  const entry = Object.values(routes).find((r) => Object.values(r).includes(slug));
  return entry ? entry[toLang] : slug;
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
