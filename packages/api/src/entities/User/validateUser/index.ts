import { makeResult } from '#/utils'

import { Contract, validateEmail, validatePassword } from '..'

const validateUser = (user: Contract) => {
  if (!user.email) return makeResult({ message: 'email/not-found' })

  const { error: emailValidationError } = validateEmail(user.email)

  if (emailValidationError)
    return makeResult({
      message: emailValidationError.message,
    })

  if (!user.password) return makeResult({ message: 'password/not-found' })

  const { error: passwordValidationError } = validatePassword(user.password)

  if (passwordValidationError)
    return makeResult({
      message: passwordValidationError.message,
    })

  return makeResult(false)
}

export default validateUser
