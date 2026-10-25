// Social-Media-Links für Footer und Über-Seite.
// Angezeigt werden nur Einträge mit gültiger https-URL. Solange alle leer sind, erscheint nichts.

export type SocialPlatform = 'linkedin' | 'youtube' | 'tiktok' | 'instagram';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  // true = Kanal Humanity Update; die erste gültige URL verlinkt den Kanalnamen auf der Über-Seite
  humanityUpdate: boolean;
}

export const social: SocialLink[] = [
  { platform: 'linkedin', label: 'LinkedIn (Temo)', url: '', humanityUpdate: false }, // TODO: URL eintragen
  { platform: 'youtube', label: 'Humanity Update YouTube', url: '', humanityUpdate: true }, // TODO: URL eintragen
  { platform: 'tiktok', label: 'Humanity Update TikTok', url: '', humanityUpdate: true }, // TODO: URL eintragen
  { platform: 'instagram', label: 'Humanity Update Instagram', url: '', humanityUpdate: true }, // TODO: URL eintragen
];

const isHttpsUrl = (url: string) => {
  try {
    return new URL(url).protocol === 'https:';
  } catch {
    return false;
  }
};

export const activeSocial = social.filter((s) => isHttpsUrl(s.url));

export const humanityUpdateUrl = activeSocial.find((s) => s.humanityUpdate)?.url;
