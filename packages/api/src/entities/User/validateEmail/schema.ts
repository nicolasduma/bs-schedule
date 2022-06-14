import { JSONSchemaType } from 'ajv'

import { EmailType } from '../Contract/types'

const schema: JSONSchemaType<EmailType> = {
  type: 'string',
  format: 'email',

  errorMessage: {
    type: 'email/not-string',
    format: 'email/invalid-format',
  },
}

export default schema
