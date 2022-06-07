import { v4 as uuid } from 'uuid'
import validator from 'validator'

import { ERRORS } from '#/constants'

import { makeResult } from '#/utils'

import Contract from '../Contract'

const make = (user: Contract) => {
  user.id = uuid()

  if (!validator.isEmail(user.email)) return makeResult(ERRORS.invalidEmail)

  if (!validator.isLength(user.password, { min: 6, max: 25 }))
    return makeResult(ERRORS.invalidPassword)

  return makeResult(null, { ...user })
}

export default make
