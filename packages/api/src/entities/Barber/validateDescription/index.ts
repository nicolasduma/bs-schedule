import { makeResult } from '@bs-schedule/utils'

import { validate, validateString } from '#/utils'

import { DescriptionType } from '../types'
import schema from './schema'

const validateDescription = (
  description: DescriptionType,
  returnValidatedData?: boolean
) => {
  const { error: stringValidationError } = validateString(description)

  if (stringValidationError)
    return makeResult({
      message: `description/${stringValidationError.message}`,
    })

  const cleanDescription = description.trim()

  const { error: validationError } = validate(cleanDescription, schema)

  if (validationError) return makeResult(validationError)

  return makeResult(false, returnValidatedData ? cleanDescription : true)
}

export default validateDescription
