const WORD_PER_MINUTE = 180

export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length

  return Math.ceil(words / WORD_PER_MINUTE)
}
