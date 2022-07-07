import { JSONSchemaType } from 'ajv'

import { AuthMethodType } from '../Contract'

const schema: JSONSchemaType<AuthMethodType> = {
  type: 'string',
  enum: ['form', 'google'],

  errorMessage: {
    type: 'authMethod/not-string',
    enum: 'authMethod/invalid',
  },
}

export default schema
