import { makeResult, makeResultFromPromise } from '@bs-schedule/utils'

import sendUserToRegisterOrVerify from './sendUserToRegisterOrVerify'

interface UserInterface {
  authMethod: 'form' | 'google'
  email: string
  password: string | null
}

const sendUserToAccessService = async (user: UserInterface) => {
  const { error, success: userFromResponse } = await sendUserToRegisterOrVerify(
    'verify',
    user
  )

  if (error) {
    if (error.message === 'email/not-exists')
      return await makeResultFromPromise(() =>
        sendUserToRegisterOrVerify('register', user)
      )

    return makeResult(error)
  }

  return makeResult(null, userFromResponse)
}

export default sendUserToAccessService
