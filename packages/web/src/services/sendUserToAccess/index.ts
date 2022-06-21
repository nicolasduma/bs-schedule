import { makeResult, makeResultFromPromise } from '@bs-schedule/utils'

import sendUserToRegisterOrVerify from './sendUserToRegisterOrVerify'

interface DatasInterface {
  email: string
  password: string
}

const sendUserToAccessService = async (user: DatasInterface) => {
  const { error, success: token } = await sendUserToRegisterOrVerify(
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

  return makeResult(null, token)
}

export default sendUserToAccessService
