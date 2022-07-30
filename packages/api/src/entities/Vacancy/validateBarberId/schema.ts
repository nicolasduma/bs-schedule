import { JSONSchemaType } from 'ajv'

import { BarberIdType } from '../types'

const schema: JSONSchemaType<BarberIdType> = {
  type: 'string',
  format: 'uuid',

  errorMessage: {
    type: 'barberId/not-string',
    format: 'barberId/invalid-format',
  },
}

export default schema
