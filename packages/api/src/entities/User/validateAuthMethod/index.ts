import { makeResult } from '@bs-schedule/utils'

import { validate, validateString } from '#/utils'

import { AuthMethodType } from '../Contract'
import schema from './schema'

const validateAuthMethod = (authMethod: AuthMethodType) => {
  const { error } = validateString(authMethod)

  if (error) return makeResult({ message: `authMethod/${error.message}` })

  return validate(authMethod.replace(/\s/g, ''), schema)
}

export default validateAuthMethod
