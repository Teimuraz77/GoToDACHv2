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
