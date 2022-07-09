import { AuthMethodType, EmailType, PasswordType } from '../types'

interface DatasContract {
  readonly authMethod: AuthMethodType
  readonly email: EmailType
  readonly password: PasswordType
}

export default DatasContract
