import fetch from 'isomorphic-unfetch'
import {
  HttpError,
} from './errors'

interface IConstructorParams {
  endpoint: RpcClient['endpoint']
  headers?: RpcClient['headers']
}

export default class RpcClient {
  endpoint: string
  headers?: Record<string, string>

  /**
   * Constructor
   */
  constructor(params: IConstructorParams) {
    const {
      headers,
      endpoint,
    } = params

    this.endpoint = endpoint
    this.headers = headers
  }

  /**
   * Call
   */
  call = async (method: string, params: object = {}, type = 'POST'): Promise<any> => {
    const headers = {
      ...this.headers,
      'Content-Type': 'application/json',
    }

    const bodyParams = type !== 'GET'
      ? JSON.stringify(params)
      : null

    const queryParams = type === 'GET'
      ? this.getQueryParams(params)
      : ''

    const response = await fetch(`${this.endpoint}${method}${queryParams}`, {
      method: type,
      body: bodyParams,
      headers,
    })

    if (!response.ok) {
      throw new HttpError({
        method,
        params,
        status: response.status,
      })
    }

    return await response.json()
  }

  /**
   * Get query params
   */
  private getQueryParams(params: Record<string, any | string> | null): string {
    if (!params)
      return ''

    return `?${Object.keys(params)
      .filter(key => params[key])
      .map((key) => {
        if (Array.isArray(params[key]))
          return params[key].map((value: string) => `${key}[]=${value}`).join('&')

        return `${key}=${params[key]}`
      })
      .join('&')}`
  }
}
