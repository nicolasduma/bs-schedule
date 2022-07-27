import { NameType, DescriptionType, PictureType } from '../types'

interface DatasContract {
  readonly name: NameType
  readonly description: DescriptionType
  readonly picture: PictureType
}

export default DatasContract
