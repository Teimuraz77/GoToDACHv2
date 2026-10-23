// Social-Media-Links für Footer und Über-Seite.
// Angezeigt werden nur Einträge mit gültiger https-URL. Solange alle leer sind, erscheint nichts.

export type SocialPlatform = 'linkedin' | 'youtube' | 'tiktok' | 'instagram';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  // true = Kanal No Nonsense Worldwide Web; die erste gültige URL verlinkt den Kanalnamen auf der Über-Seite
  nnww: boolean;
}

export const social: SocialLink[] = [
  { platform: 'linkedin', label: 'LinkedIn (Temo)', url: '', nnww: false }, // TODO: URL eintragen
  { platform: 'youtube', label: 'NNWW YouTube', url: '', nnww: true }, // TODO: URL eintragen
  { platform: 'tiktok', label: 'NNWW TikTok', url: '', nnww: true }, // TODO: URL eintragen
  { platform: 'instagram', label: 'NNWW Instagram', url: '', nnww: true }, // TODO: URL eintragen
];

const isHttpsUrl = (url: string) => {
  try {
    return new URL(url).protocol === 'https:';
  } catch {
    return false;
  }
};

export const activeSocial = social.filter((s) => isHttpsUrl(s.url));

export const nnwwUrl = activeSocial.find((s) => s.nnww)?.url;
