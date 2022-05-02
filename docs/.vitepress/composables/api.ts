import { createFetch } from '@vueuse/core'
import { btoa } from 'isomorphic-base64'

// TODO: Move to .env
const USER = 'clients'
const PASSWORD = 'guest'

const auth = (USER && PASSWORD)
  ? `${USER}:${PASSWORD}`
  : null

// TODO: Move to .env
const RPC_URL = 'https://pullcrm.com/api'

export const useApi = createFetch({
  baseUrl: RPC_URL,
  fetchOptions: {
    headers: {
      Authorization: auth ? `Basic ${btoa(`${auth}`)}` : null,
    },
  },
})
