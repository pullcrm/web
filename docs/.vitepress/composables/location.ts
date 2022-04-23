export function useAbsoluteLink(event: Event): void {
  window.open((event.target as HTMLLinkElement).href.replace('https://pullcrm.com', ''), '_self')
}
