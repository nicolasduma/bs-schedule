import bcypt from 'bcrypt'

import makeResult from '../makeResult'

const verifyPassword = (password: string, hash: string) => {
  const isMatch = bcypt.compareSync(password, hash)
  return makeResult(isMatch ? null : { message: 'password/incorrect' })
}

export default verifyPassword
