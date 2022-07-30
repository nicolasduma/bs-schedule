import { makeResult } from '@bs-schedule/utils'

import {
  DatasContract,
  validateBarberId,
  validateUserId,
  validateTimestamp,
  validateServices,
} from '..'

const validateVacancy = (
  datas: DatasContract,
  returnValidatedData?: boolean
) => {
  const layer = 'entity'

  if (!datas.barberId)
    return makeResult({ layer, message: 'barberId/not-found' })

  const { error: barberIdValidationError, success: barberId } =
    validateBarberId(datas.barberId, true)

  if (barberIdValidationError)
    return makeResult({
      layer,
      message: barberIdValidationError.message,
    })

  if (!datas.userId) return makeResult({ layer, message: 'userId/not-found' })

  const { error: userIdValidationError, success: userId } = validateUserId(
    datas.userId,
    true
  )

  if (userIdValidationError)
    return makeResult({
      layer,
      message: userIdValidationError.message,
    })

  if (!datas.timestamp)
    return makeResult({ layer, message: 'timestamp/not-found' })

  const { error: timestampValidationError, success: timestamp } =
    validateTimestamp(datas.timestamp, true)

  if (timestampValidationError)
    return makeResult({
      layer,
      message: timestampValidationError.message,
    })

  if (!datas.services)
    return makeResult({ layer, message: 'services/not-found' })

  const { error: servicesValidationError, success: services } =
    validateServices(datas.services, true)

  if (servicesValidationError)
    return makeResult({
      layer,
      message: servicesValidationError.message,
    })

  return makeResult(
    false,
    returnValidatedData ? { barberId, userId, timestamp, services } : true
  )
}

export default validateVacancy
