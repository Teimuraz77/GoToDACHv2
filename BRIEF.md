# GoToDACH.com – Projekt-Briefing

## Worum es geht
GoToDACH hilft Unternehmen, im DACH-Raum (Deutschland, Österreich, Schweiz) zu verkaufen:
Markteintritt, Vertriebsaufbau und die passenden Vertriebsleute dazu.
Inhaber: Teimuraz „Temo“ Gogodze, Frankfurt am Main. Kontakt: temo@gotodach.com.

Roter Faden: **Markteintritt + die Leute, die ihn umsetzen.** Jede Unterseite zahlt darauf ein.

## Seitenstruktur
| Pfad | Inhalt |
|---|---|
| `/` | Startseite: Positionierung in einem Satz, drei Säulen (Go-to-Market, Renewable Energy, Talent), Über-Temo-Teaser, Kontakt-CTA |
| `/go-to-market` | Markteintritt & Vertriebsaufbau DACH für B2B-/SaaS-Firmen |
| `/renewable-energy` | Brücke Deutschland → Zentralasien: deutschen Mittelstand und Konzerne beim Markteintritt in der Region unterstützen, mit Universitäten vor Ort und eigenen Konferenzen |
| `/talent` | Talent-Akquise: Vermittlung von B2B-Tech-Sales-Profis auf Erfolgsbasis (GoToDACH Talent) |
| `/ueber-temo` | Persönliche Seite, Werdegang, Arbeitsweise |
| `/insights` | Blog (Astro Content Collections, Markdown in `src/content/insights/`) |
| `/kontakt` | Kontakt (zunächst mailto + Calendly-Link o. Ä., kein eigenes Formular-Backend) |
| `/impressum`, `/datenschutz` | Pflichtseiten, Texte liefert Temo |

## Zielgruppen
- Geschäftsführer/Vertriebsleiter ausländischer B2B-, SaaS- und Renewables-Firmen, die nach DACH wollen
- Firmen in DACH, die Vertriebsleute suchen
- Sekundär: Sales-Kandidaten (für Talent)

## Sprache & Ton
- Englisch als Standardsprache unter `/`, Deutsch unter `/de/`; weitere Sprachen folgen (Sprachmenü mit Flaggen, Slugs in `src/i18n/utils.ts`)
- Rechtstexte nur auf Deutsch (verbindlich), andere Sprachen zeigen den deutschen Text mit Hinweis
- Klar, direkt, bodenständig, mit trockenem Humor. Kein Berater-Bullshit-Bingo, keine leeren Superlative.

## Design
- Dark Mode: Dunkelblau/Schwarz als Basis, Kupfer und Gold als Akzente
- Skill `frontend-design` für die Gestaltung nutzen; keine Template-Optik
- Mobile first; Lighthouse ≥ 90 in allen Kategorien anpeilen
- Schriften lokal einbinden (keine Google-Fonts-CDN-Aufrufe, DSGVO)
- Keine Tracking-Skripte ohne Rücksprache

## Harte Regeln
- **Nichts erfinden**: keine Kundenlogos, Referenzen, Testimonials, Zahlen, Erfolgsquoten oder Zertifikate.
  Wo Inhalte fehlen: sichtbarer Platzhalter `[TODO: …]` und am Ende auflisten.
- Preise/Honorare nur veröffentlichen, wenn Temo es freigibt.
- Eine Seite pro Arbeitsschritt; nach jeder Seite mit Playwright Screenshots (Desktop 1440px + Mobil 390px) prüfen.
- Vor dem Abschluss `npm run build` ausführen; muss fehlerfrei durchlaufen.

## Offene Punkte (von Temo zu liefern)
- Werdegang/Text für `/ueber-temo`, Foto
- Konkretes Leistungspaket für Go-to-Market und Renewable Energy
- Freigabe, ob das Talent-Honorar öffentlich genannt wird
- Impressum- und Datenschutztexte
- Logo (falls vorhanden)
