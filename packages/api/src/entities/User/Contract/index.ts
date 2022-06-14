import { EmailType, PasswordType } from './types'

interface Contract {
  id?: string
  readonly email: EmailType
  readonly password: PasswordType
}

export default Contract
