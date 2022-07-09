import { makeResult } from '@bs-schedule/utils'

import { validate, validateString } from '#/utils'

import { PasswordType } from '../types'
import schema from './schema'

const validatePassword = (
  password: PasswordType,
  returnValidatedData?: boolean
) => {
  const { error } = validateString(password)

  if (error) return makeResult({ message: `password/${error.message}` })

  const cleanPassword = password.replace(/\s/g, '')

  const { error: e } = validate(cleanPassword, schema)

  if (e) return makeResult(e)

  return makeResult(false, returnValidatedData ? cleanPassword : true)
}

export default validatePassword
