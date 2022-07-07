import {
  AuthMethodType,
  EmailType,
  PasswordType,
} from '#/entities/User/Contract'

interface UserContract {
  authMethod: AuthMethodType
  email: EmailType
  password: PasswordType
}

export default interface DatasContract {
  user: UserContract
}
