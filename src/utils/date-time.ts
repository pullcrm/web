import dayjs from 'dayjs'

import 'dayjs/locale/uk'

dayjs.locale('uk')

export function formatDate(date: string, format: string) {
  return dayjs(date).format(format)
}
