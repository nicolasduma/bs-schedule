import { makeResult } from '@bs-schedule/utils'

import { validate, validateString } from '#/utils'

import { NameType } from '../types'
import schema from './schema'

const validateName = (name: NameType, returnValidatedData?: boolean) => {
  const { error: stringValidationError } = validateString(name)

  if (stringValidationError)
    return makeResult({ message: `name/${stringValidationError.message}` })

  const cleanName = name.trim()

  const { error: validationError } = validate(cleanName, schema)

  if (validationError) return makeResult(validationError)

  return makeResult(false, returnValidatedData ? cleanName : true)
}

export default validateName
