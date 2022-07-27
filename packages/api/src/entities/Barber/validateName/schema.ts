import { JSONSchemaType } from 'ajv'

import { NameType } from '../types'

const schema: JSONSchemaType<NameType> = {
  type: 'string',
  minLength: 3,
  maxLength: 15,

  errorMessage: {
    type: 'name/not-string',
    minLength: 'name/too-short',
    maxLength: 'name/too-long',
  },
}

export default schema
