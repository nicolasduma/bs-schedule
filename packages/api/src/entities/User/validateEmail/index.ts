import { makeResult } from '@bs-schedule/utils'

import { validate, validateString } from '#/utils'

import { EmailType } from '../Contract/types'
import schema from './schema'

const validateEmail = (email: EmailType) => {
  const { error } = validateString(email)

  if (error) return makeResult({ message: `email/${error.message}` })

  return validate(email.replace(/\s/g, ''), schema)
}

export default validateEmail
