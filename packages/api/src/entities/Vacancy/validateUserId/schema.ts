import { JSONSchemaType } from 'ajv'

import { UserIdType } from '../types'

const schema: JSONSchemaType<UserIdType> = {
  type: 'string',
  format: 'uuid',

  errorMessage: {
    type: 'userId/not-string',
    format: 'userId/invalid-format',
  },
}

export default schema
