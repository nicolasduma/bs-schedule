import { makeResult } from '@bs-schedule/utils'

import {
  DatasContract,
  validateName,
  validateDescription,
  validatePicture,
} from '..'

const validateBarber = (
  datas: DatasContract,
  returnValidatedData?: boolean
) => {
  const layer = 'entity'

  if (!datas.name) return makeResult({ layer, message: 'name/not-found' })

  const { error: nameValidationError, success: name } = validateName(
    datas.name,
    true
  )

  if (nameValidationError)
    return makeResult({
      layer,
      message: nameValidationError.message,
    })

  if (!datas.description)
    return makeResult({ layer, message: 'description/not-found' })

  const { error: descriptionValidationError, success: description } =
    validateDescription(datas.description, true)

  if (descriptionValidationError)
    return makeResult({
      layer,
      message: descriptionValidationError.message,
    })

  if (!datas.picture) return makeResult({ layer, message: 'picture/not-found' })

  const { error: pictureValidationError, success: picture } = validatePicture(
    datas.picture,
    true
  )

  if (pictureValidationError)
    return makeResult({
      layer,
      message: pictureValidationError.message,
    })

  return makeResult(
    false,
    returnValidatedData ? { name, description, picture } : true
  )
}

export default validateBarber
