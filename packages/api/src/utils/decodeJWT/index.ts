import { makeResult, makeResultFromPromise } from '@bs-schedule/utils'
import jwt from 'jsonwebtoken'

import { JWT_SECRET } from '#/constants'

const decodeJWT = async (token: string) => {
  const { error, success: decoded } = await makeResultFromPromise(() =>
    jwt.verify(token, JWT_SECRET)
  )

  return makeResult(error ? { message: 'token/invalid' } : null, decoded)
}

export default decodeJWT
