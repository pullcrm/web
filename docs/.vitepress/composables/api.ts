import { createFetch } from '@vueuse/core'
import { btoa } from 'isomorphic-base64'

// TODO: Move to .env
const USER = 'clients'
const PASSWORD = 'guest'

const auth = (USER && PASSWORD)
  ? `${USER}:${PASSWORD}`
  : null

export const useApi = createFetch({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  baseUrl: import.meta.env.VITE_RPC_URL,
  fetchOptions: {
    headers: {
      Authorization: auth ? `Basic ${btoa(`${auth}`)}` : null,
    },
  },
})
