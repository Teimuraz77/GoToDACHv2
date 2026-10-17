import { defaultLang, languages, ui, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first && first in languages && first !== defaultLang) return first as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: keyof (typeof ui)[typeof defaultLang]) => ui[lang][key] ?? ui[defaultLang][key];
}

// Deutsch liegt unter "/", Englisch unter "/en/".
export function localePath(lang: Lang, path = '/') {
  const clean = path.replace(/^\//, '');
  if (lang === defaultLang) return `/${clean}`;
  return `/${lang}/${clean}`;
}

// Rechtsseiten haben im Englischen andere Slugs. Alle anderen Slugs sind in beiden Sprachen gleich.
const legalSlugs: Record<string, Record<Lang, string>> = {
  impressum: { de: 'impressum', en: 'legal-notice' },
  datenschutz: { de: 'datenschutz', en: 'privacy' },
};

// Pfad ohne Sprachpräfix in die andere Sprache übertragen.
export function alternatePath(barePath: string, toLang: Lang) {
  const clean = barePath.replace(/^\/|\/$/g, '');
  const entry = Object.values(legalSlugs).find((s) => s.de === clean || s.en === clean);
  const slug = entry ? entry[toLang] : clean;
  return localePath(toLang, slug);
}
