import { AuthMethodType, EmailType, PasswordType } from './types'

interface Contract {
  readonly id?: string
  readonly authMethod: AuthMethodType
  readonly email: EmailType
  readonly password: PasswordType
}

export default Contract
export { AuthMethodType, EmailType, PasswordType }
