import { IdType, AccessTokenType } from '../types'

import { DatasContract } from '..'

interface ModelContract extends DatasContract {
  readonly id: IdType
  readonly accessToken: AccessTokenType
}

export default ModelContract
