import { userEntity } from '#/entities'
import { EmailType } from '#/entities/User/Contract/types'

interface Contract {
  readonly save: (datas: userEntity.Contract) => Promise<void>
  readonly findByEmail: (
    email: EmailType
  ) => Promise<userEntity.Contract | null>
}

export default Contract
