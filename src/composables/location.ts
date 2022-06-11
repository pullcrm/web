export function useAbsoluteLink(url: string): void {
  window.open(url, '_self')
}
