import { makeResultFromPromise } from '@bs-schedule/utils'

import api from '#/libs/api'

const sendUserTokenToVerifyService = async (token: string) => {
  return await makeResultFromPromise(() =>
    api.post('/verify-by-token', { token })
  )
}

export default sendUserTokenToVerifyService
