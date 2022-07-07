import { makeResult } from '@bs-schedule/utils'

import {
  Contract,
  validateAuthMethod,
  validateEmail,
  validatePassword,
} from '..'

const validateUser = (user: Contract) => {
  const layer = 'entity'

  if (!user.authMethod)
    return makeResult({ layer, message: 'authMethod/not-found' })

  const { error: authMethodValidationError } = validateAuthMethod(
    user.authMethod
  )

  if (authMethodValidationError)
    return makeResult({
      layer,
      message: authMethodValidationError.message,
    })

  if (!user.email) return makeResult({ layer, message: 'email/not-found' })

  const { error: emailValidationError } = validateEmail(user.email)

  if (emailValidationError)
    return makeResult({
      layer,
      message: emailValidationError.message,
    })

  if (!user.password)
    return makeResult({ layer, message: 'password/not-found' })

  const { error: passwordValidationError } = validatePassword(user.password)

  if (passwordValidationError)
    return makeResult({
      layer,
      message: passwordValidationError.message,
    })

  return makeResult(false)
}

export default validateUser
