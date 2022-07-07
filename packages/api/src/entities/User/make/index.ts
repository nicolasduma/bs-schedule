import { v4 as uuid } from 'uuid'
import { makeResult } from '@bs-schedule/utils'

import { Contract, validateUser } from '..'

const make = ({ id = uuid(), ...userWithoutId }: Contract) => {
  const user = { id, ...userWithoutId }

  const { error } = validateUser(user)

  if (error) return makeResult({ layer: 'entity', message: error.message })

  return makeResult(null, user)
}

export default make
