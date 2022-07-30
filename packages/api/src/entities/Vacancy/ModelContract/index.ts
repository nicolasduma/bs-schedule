import { IdType } from '../types'

import { DatasContract } from '..'

interface ModelContract extends DatasContract {
  readonly id: IdType
}

export default ModelContract
