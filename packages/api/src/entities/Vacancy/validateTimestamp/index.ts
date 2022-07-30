import { makeResult } from '@bs-schedule/utils'

import { validate } from '#/utils'

import { TimestampType } from '../types'
import schema from './schema'

const validateTimestamp = (
  timestamp: TimestampType,
  returnValidatedData?: boolean
) => {
  const { error: validationError } = validate(timestamp, schema)

  if (validationError) return makeResult(validationError)

  return makeResult(false, returnValidatedData ? timestamp : true)
}

export default validateTimestamp
