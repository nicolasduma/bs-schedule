import { v4 as uuid } from 'uuid'
import { makeResult } from '@bs-schedule/utils'

import { Contract, validateUser } from '..'

const make = (user: Contract) => {
  const { error } = validateUser(user)

  if (error) return makeResult({ layer: 'entity', message: error.message })

  const id = uuid()

  return makeResult(null, { id, ...user })
}

export default make
