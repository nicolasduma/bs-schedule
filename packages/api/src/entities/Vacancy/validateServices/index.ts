import { makeResult } from '@bs-schedule/utils'

import { validate } from '#/utils'

import { ServicesContract } from '../types'
import schema from './schema'

const validateServices = (
  services: ServicesContract,
  returnValidatedData?: boolean
) => {
  const { error: validationError } = validate(services, schema)

  if (validationError) return makeResult(validationError)

  return makeResult(false, returnValidatedData ? services : true)
}

export default validateServices
