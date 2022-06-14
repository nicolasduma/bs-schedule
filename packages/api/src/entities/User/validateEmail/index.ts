import { validate } from '#/utils'

import { EmailType } from '../Contract/types'
import schema from './schema'

const validateEmail = (email: EmailType) => validate(email.trim(), schema)

export default validateEmail
