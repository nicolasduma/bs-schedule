import { makeResult } from '@bs-schedule/utils'

import { validate, validateString } from '#/utils'

import { BarberIdType } from '../types'
import schema from './schema'

const validateBarberId = (
  barberId: BarberIdType,
  returnValidatedData?: boolean
) => {
  const { error: stringValidationError } = validateString(barberId)

  if (stringValidationError)
    return makeResult({
      message: `barberId/${stringValidationError.message}`,
    })

  const cleanBarberId = barberId.replace(/\s/g, '')

  const { error: validationError } = validate(cleanBarberId, schema)

  if (validationError) return makeResult(validationError)

  return makeResult(false, returnValidatedData ? cleanBarberId : true)
}

export default validateBarberId
