import { makeResult } from '@bs-schedule/utils'
import bcypt from 'bcrypt'

const verifyPassword = (password: string, hash: string) => {
  const isMatch = bcypt.compareSync(password, hash)
  return makeResult(isMatch ? null : { message: 'password/incorrect' })
}

export default verifyPassword
