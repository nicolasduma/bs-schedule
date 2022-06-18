import jwt from 'jsonwebtoken'

import { JWT_SECRET } from '#/constants'

import { makeResultPromise } from '../'
import makeResult from '../makeResult'

const decodeJWT = async (token: string) => {
  const { error, success: decoded } = await makeResultPromise(() =>
    jwt.verify(token, JWT_SECRET)
  )

  return makeResult(error ? { message: 'token/invalid' } : null, decoded)
}

export default decodeJWT
