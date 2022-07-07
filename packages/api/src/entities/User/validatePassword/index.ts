import { makeResult } from '@bs-schedule/utils'

import { validate, validateString } from '#/utils'

import { PasswordType } from '../Contract'
import schema from './schema'

const validatePassword = (password: PasswordType) => {
  const { error } = validateString(password)

  if (error) return makeResult({ message: `password/${error.message}` })

  return validate(password.replace(/\s/g, ''), schema)
}

export default validatePassword
