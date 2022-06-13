import { createFetch } from '@vueuse/core'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { btoa } from 'isomorphic-base64'
import { factory as createApi } from '~/services/api'
import RpcClient from '~/services/rpc-client'

// TODO: Move to .env
const USER = 'clients'
const PASSWORD = 'guest'

const auth = (USER && PASSWORD)
  ? `${USER}:${PASSWORD}`
  : null

export const useGlobalApi = createFetch({
  baseUrl: import.meta.env.VITE_RPC_URL,
  fetchOptions: {
    headers: {
      Authorization: auth ? `Basic ${btoa(`${auth}`)}` : '',
    },
  },
})

export const api = createApi(
  new RpcClient({
    params: {
      publicationState: import.meta.env.VITE_PUBLICATION_STATE,
    },
    endpoint: import.meta.env.VITE_STRAPI_URL,
  }).call,
)
