import fetch from 'isomorphic-unfetch'
import {
  HttpError,
} from './errors'

interface IConstructorParams {
  endpoint: RpcClient['endpoint']
  headers?: RpcClient['headers']
  params?: RpcClient['params']
}

export default class RpcClient {
  endpoint: string
  headers?: Record<string, string>
  params?: Record<string, string>

  /**
   * Constructor
   */
  constructor(params: IConstructorParams) {
    this.endpoint = params.endpoint
    this.headers = params.headers
    this.params = params.params
  }

  /**
   * Call
   */
  call = async (method: string, params: object = {}, type = 'POST'): Promise<any> => {
    const headers = {
      ...this.headers,
      'Content-Type': 'application/json',
    }

    params = {
      ...params,
      ...(this.params || {}),
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
      .map(key => `${key}=${params[key]}`)
      .join('&')}`
  }
}
