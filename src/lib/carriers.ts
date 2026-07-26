import carriersData from "./carriers.json";
import logoMap from "./carrier-logos.json";

export type Carrier = {
  name: string;
  code: string;
};

export const CARRIERS = carriersData as Carrier[];

/** Shown first in the picker — common for JCEX / China-origin parcels */
export const POPULAR_CARRIER_CODES = [
  "jcex",
  "cainiao",
  "yun-express",
  "yanwen",
  "4px",
  "usps",
  "dhl",
  "fedex",
  "ups",
  "royal-mail",
  "sf-express",
] as const;

/** Verified TrackingMore CDN logos (built by scripts/fetch-carrier-logos.mjs) */
const LOGO_MAP = logoMap as Record<string, string>;

/** Public TrackingMore icon CDN — correct path is /images/icons/express/ */
export const CARRIER_LOGO_CDN = "https://s.trackingmore.com/images/icons/express/";

const LOGO_ALIAS: Record<string, string> = {
  "redur-reference": "redur",
  "flash-express-th": "flash-express",
  "expressone-bg": "expressone",
  "fedex-poland": "fedex",
  "aliexpress-saver": "aliexpress",
  "aliexpress-premium": "aliexpress",
  "aliexpress-standard": "aliexpress",
  "bpost-international": "bpost",
  "dhl-paket": "dhl",
  "courier-gr": "hispapost",
  "wedo-intime": "wedo",
  "sendx-gr": "sendx",
  "cne-express": "cne",
  "yun-express": "yunexpress",
  "dpd-ie": "dpd",
  "dpd-france": "dpd",
  "dpd-uk": "dpd",
  "dpd-portugal": "dpd",
  "dpd-poland": "dpd",
  "dpd-romania": "dpd",
  "amazon-india": "amazon",
};

const AVATAR_COLORS = ["#0A2A5C", "#1246B0", "#1A56C5", "#FF6A00", "#E55F00", "#334155"];

function hashHue(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** Nice letter avatar when CDN has no logo */
export function initialsLogo(label: string): string {
  const words = label.replace(/[-_]/g, " ").trim().split(/\s+/).filter(Boolean);
  const initials = ((words[0]?.[0] || "?") + (words[1]?.[0] || "")).toUpperCase().slice(0, 2);
  const bg = AVATAR_COLORS[hashHue(label) % AVATAR_COLORS.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="12" fill="${bg}"/>
    <text x="32" y="34" text-anchor="middle" dominant-baseline="middle"
      font-family="system-ui,sans-serif" font-size="22" font-weight="700" fill="#fff">${initials}</text>
  </svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg.replace(/\s+/g, " ").trim());
}

export const DEFAULT_CARRIER_LOGO = initialsLogo("?");

/**
 * Logo URL for a carrier.
 * Prefer verified map → CDN guess → initials avatar (never blank truck).
 */
export function carrierLogoUrl(code: string, name?: string): string {
  if (LOGO_MAP[code]) return LOGO_MAP[code];

  const slug = LOGO_ALIAS[code] || code;
  // Unverified CDN guess — UI falls back via onError to initials
  return `${CARRIER_LOGO_CDN}${slug}.png`;
}

export function carrierLogoFallback(code: string, name?: string): string {
  return initialsLogo(name || code);
}

export function getPopularCarriers(): Carrier[] {
  const byCode = new Map(CARRIERS.map((c) => [c.code, c]));
  return POPULAR_CARRIER_CODES.map((code) => byCode.get(code)).filter(Boolean) as Carrier[];
}

export function sortCarriersForPicker(list: Carrier[]): Carrier[] {
  const popularSet = new Set<string>(POPULAR_CARRIER_CODES);
  const popular = POPULAR_CARRIER_CODES.map((code) => list.find((c) => c.code === code)).filter(
    Boolean
  ) as Carrier[];
  const rest = list
    .filter((c) => !popularSet.has(c.code))
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  return [...popular, ...rest];
}
