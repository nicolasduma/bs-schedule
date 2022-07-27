import { makeResult } from '@bs-schedule/utils'

import { validateString } from '#/utils'

import { PictureType } from '../types'

const validatePicture = (
  picture: PictureType,
  returnValidatedData?: boolean
) => {
  const { error: stringValidationError } = validateString(picture)

  if (stringValidationError)
    return makeResult({ message: `picture/${stringValidationError.message}` })

  const cleanPicture = picture.trim()

  return makeResult(false, returnValidatedData ? cleanPicture : true)
}

export default validatePicture
