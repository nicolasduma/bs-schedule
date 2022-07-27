import { JSONSchemaType } from 'ajv'

import { DescriptionType } from '../types'

const schema: JSONSchemaType<DescriptionType> = {
  type: 'string',
  minLength: 3,
  maxLength: 30,

  errorMessage: {
    type: 'description/not-string',
    minLength: 'description/too-short',
    maxLength: 'description/too-long',
  },
}

export default schema
