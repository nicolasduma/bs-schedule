import { JSONSchemaType } from 'ajv'

import { PasswordType } from '../Contract/types'

const schema: JSONSchemaType<PasswordType> = {
  type: 'string',
  minLength: 6,
  maxLength: 25,

  errorMessage: {
    type: 'password/not-string',
    minLength: 'password/too-short',
    maxLength: 'password/too-long',
  },
}

export default schema
