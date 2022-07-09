import { makeResult } from '@bs-schedule/utils'

import {
  DatasContract,
  validateAuthMethod,
  validateEmail,
  validatePassword,
} from '..'

const validatedatas = (datas: DatasContract, returnValidatedData?: boolean) => {
  const layer = 'entity'

  if (!datas.authMethod)
    return makeResult({ layer, message: 'authMethod/not-found' })

  const { error: authMethodValidationError, success: authMethod } =
    validateAuthMethod(datas.authMethod, true)

  if (authMethodValidationError)
    return makeResult({
      layer,
      message: authMethodValidationError.message,
    })

  if (!datas.email) return makeResult({ layer, message: 'email/not-found' })

  const { error: emailValidationError, success: email } = validateEmail(
    datas.email,
    true
  )

  if (emailValidationError)
    return makeResult({
      layer,
      message: emailValidationError.message,
    })

  if (!datas.password)
    return makeResult({ layer, message: 'password/not-found' })

  const { error: passwordValidationError, success: password } =
    validatePassword(datas.password, true)

  if (passwordValidationError)
    return makeResult({
      layer,
      message: passwordValidationError.message,
    })

  return makeResult(
    false,
    returnValidatedData ? { authMethod, email, password } : true
  )
}

export default validatedatas
