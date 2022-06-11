/**
 * HttpError
 */
export class HttpError extends Error {
  method: string
  params: object
  status: number

  sentryCategory: string
  sentryFingerprint: any[]

  constructor({ method, params, status }: any) {
    super()

    this.name = 'HttpError'
    this.method = method
    this.params = params
    this.status = status
    this.message = `Method "${method}" returned status ${status}.`

    this.sentryCategory = 'rpcClient'
    this.sentryFingerprint = [method, status]
  }
}
