import { makeResult, makeResultFromPromise } from '@bs-schedule/utils'

import api from '#/libs/api'

interface UserInterface {
  authMethod: 'form' | 'google'
  email: string
  password: string | null
}

const sendUserToRegisterOrVerify = async (
  route: 'register' | 'verify',
  user: UserInterface
) => {
  const { error: rejected, success: resolved } = await makeResultFromPromise(
    () => api.post(`/user/${route}`, { user })
  )

  if (rejected) {
    if (rejected.message === 'Network Error')
      return makeResult({ message: 'network-error' })

    const { error } = rejected.response.data

    if (typeof error === 'object') return makeResult(error)

    return makeResult({ messege: 'there-was-error' })
  }

  const { user: userFromResponse } = resolved.data.success

  return makeResult(null, userFromResponse)
}

export default sendUserToRegisterOrVerify
