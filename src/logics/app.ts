export function prepareAppLinkByPath(path: string) {
  return `https://${import.meta.env.VITE_APP_HOSTNAME}${path}`
}
