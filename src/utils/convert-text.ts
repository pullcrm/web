// https://stackoverflow.com/a/54651317

export function toCamelCase(text: string): string {
  return text.replace(/-\w/g, clearAndUpper)
}

export function toPascalCase(text: string): string {
  return text.replace(/(^\w|-\w)/g, clearAndUpper)
}

function clearAndUpper(text: string): string {
  return text.replace(/-/, '').toUpperCase()
}
