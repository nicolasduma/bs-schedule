import { makeResult } from '@bs-schedule/utils'

import { validate, validateString } from '#/utils'

import { UserIdType } from '../types'
import schema from './schema'

const validateUserId = (userId: UserIdType, returnValidatedData?: boolean) => {
  const { error: stringValidationError } = validateString(userId)

  if (stringValidationError)
    return makeResult({
      message: `userId/${stringValidationError.message}`,
    })

  const cleanUserId = userId.replace(/\s/g, '')

  const { error: validationError } = validate(cleanUserId, schema)

  if (validationError) return makeResult(validationError)

  return makeResult(false, returnValidatedData ? cleanUserId : true)
}

export default validateUserId
