import { validate } from '#/utils'

import { PasswordType } from '../Contract/types'
import schema from './schema'

const validatePassword = (password: PasswordType) =>
  validate(password.replace(/\s/g, ''), schema)

export default validatePassword
