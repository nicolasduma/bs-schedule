import { makeResult } from '@bs-schedule/utils'

import { validate, validateString } from '#/utils'

import { AuthMethodType } from '../types'
import schema from './schema'

const validateAuthMethod = (
  authMethod: AuthMethodType,
  returnValidatedData?: boolean
) => {
  const { error: stringValidationError } = validateString(authMethod)

  if (stringValidationError)
    return makeResult({
      message: `authMethod/${stringValidationError.message}`,
    })

  const cleanAuthMethod = authMethod.replace(/\s/g, '')

  const { error: validationError } = validate(cleanAuthMethod, schema)

  if (validationError) return makeResult(validationError)

  return makeResult(false, returnValidatedData ? cleanAuthMethod : true)
}

export default validateAuthMethod
