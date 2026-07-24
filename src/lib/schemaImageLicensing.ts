import { SITE_ORIGIN, BRAND } from "./siteConfig";

export { SITE_ORIGIN };

/** Schema.org Organization node reused as creator across ImageObjects */
export const IMAGE_CREATOR = {
  "@type": "Organization",
  name: BRAND.name,
  url: SITE_ORIGIN,
} as const;

/**
 * Full set of Schema.org ImageObject properties recommended by Google for
 * Image Metadata (Search Console: license, creator, acquireLicensePage,
 * copyrightNotice, creditText).
 */
export const imageObjectLicensing = {
  license: SITE_ORIGIN,
  creator: IMAGE_CREATOR,
  acquireLicensePage: `${SITE_ORIGIN}/contact-us`,
  copyrightNotice: `© ${BRAND.name}. All rights reserved.`,
  creditText: BRAND.name,
} as const;
