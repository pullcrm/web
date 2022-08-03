export function prepareStrapiImage(path: string) {
  if (import.meta.env.VITE_HAS_LOGGER)
    return `${import.meta.env.VITE_STRAPI_URL.replace('/api/slugify', '')}${path}`

  return path
}
