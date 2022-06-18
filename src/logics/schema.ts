export const websiteScheme = {
  '@context': 'http://schema.org',
  '@type': 'WebSite',
  'name': SITE_NAME,
  'alternateName': SEO_TITLE_DEFAULT,
  'url': 'https://pullcrm.com',
  'potentialAction': {
    '@type': 'SearchAction',
    'target': 'https://pullcrm.com/faq/?q={query}',
    'query': 'required',
  },
}

export const organizationScheme = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  'url': 'https://pullcrm.com',
  'logo': `https://pullcrm.com${SITE_LOGO_URL_PNG}`,
  'name': SITE_NAME,
}

export const localBusinessScheme = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': SITE_NAME,
  'image': `https://pullcrm.com${SITE_LOGO_URL_PNG}`,
  'url': 'https://pullcrm.com',
  'telephone': SITE_PHONE,
}
