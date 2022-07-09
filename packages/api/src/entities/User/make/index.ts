import { makeResult } from '@bs-schedule/utils'
import { v4 as uuid } from 'uuid'

import { DatasContract, ModelContract, validateUser } from '..'

import { generatePassword } from '#/utils'

const make = (datas: DatasContract) => {
  const { error, success: validatedUser } = validateUser(datas, true)

  if (error) return makeResult({ layer: 'entity', message: error.message })

  const user: ModelContract = {
    ...validatedUser,
    id: uuid(),
    accessToken: generatePassword(),
  }

  return makeResult(null, user)
}

export default make
