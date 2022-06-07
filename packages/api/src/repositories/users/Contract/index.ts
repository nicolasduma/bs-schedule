import { userEntity } from '#/entities'

interface Contract {
  save: (datas: userEntity.Contract) => Promise<void>
}

export default Contract
