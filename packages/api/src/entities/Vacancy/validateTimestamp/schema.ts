import { JSONSchemaType } from 'ajv'

import { TimestampType } from '../types'

const schema: JSONSchemaType<TimestampType> = {
  type: 'number',

  errorMessage: {
    type: 'timestamp/not-number',
  },
}

export default schema
