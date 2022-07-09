import { JSONSchemaType } from 'ajv'

import { PasswordType } from '../types'

const schema: JSONSchemaType<PasswordType> = {
  type: 'string',
  minLength: 6,
  maxLength: 70,

  errorMessage: {
    type: 'password/not-string',
    minLength: 'password/too-short',
    maxLength: 'password/too-long',
  },
}

export default schema
