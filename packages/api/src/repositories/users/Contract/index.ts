import { userEntity } from '#/entities'
import { EmailType } from '#/entities/User/Contract/types'

interface Contract {
  save: (datas: userEntity.Contract) => Promise<void>
  findByEmail: (email: EmailType) => Promise<userEntity.Contract | null>
}

export default Contract
