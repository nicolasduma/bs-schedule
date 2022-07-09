import { makeResult } from '@bs-schedule/utils'

import { validate, validateString } from '#/utils'

import { EmailType } from '../types'
import schema from './schema'

const validateEmail = (email: EmailType, returnValidatedData?: boolean) => {
  const { error: stringValidationError } = validateString(email)

  if (stringValidationError)
    return makeResult({ message: `email/${stringValidationError.message}` })

  const cleanEmail = email.replace(/\s/g, '')

  const { error: validationError } = validate(cleanEmail, schema)

  if (validationError) return makeResult(validationError)

  return makeResult(false, returnValidatedData ? cleanEmail : true)
}

export default validateEmail
