export function useAbsoluteLink(event) {
  window.open(event.target.href.replace('https://pullcrm.com', ''), '_self')
}
