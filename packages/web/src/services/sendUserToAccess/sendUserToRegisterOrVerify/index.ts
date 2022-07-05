import { makeResult, makeResultFromPromise } from '@bs-schedule/utils'

import api from '#/libs/api'

interface UserInterface {
  authMethod: 'google' | 'password'
  email: string
  passwordOrGoogleId: string | null
}

const sendUserToRegisterOrVerify = async (
  route: 'register' | 'verify',
  user: UserInterface
) => {
  const { error: rejected, success: resolved } = await makeResultFromPromise(
    () => api.post(`/user/${route}`, user)
  )

  if (rejected) {
    if (rejected.message === 'Network Error')
      return makeResult({ message: 'network-error' })

    const { error } = rejected.response.data

    if (typeof error === 'object') return makeResult(error)

    return makeResult({ messege: 'there-was-error' })
  }

  const { success } = resolved.data

  return makeResult(null, success.token)
}

export default sendUserToRegisterOrVerify
