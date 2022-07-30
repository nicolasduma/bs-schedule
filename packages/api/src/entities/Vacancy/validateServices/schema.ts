import { JSONSchemaType } from 'ajv'

import { ServicesContract } from '../types'

const schema: JSONSchemaType<ServicesContract> = {
  type: 'object',
  required: ['gradient', 'beard', 'eyebrow'],
  properties: {
    gradient: { type: 'boolean' },
    beard: { type: 'boolean' },
    eyebrow: { type: 'boolean' },
  },

  errorMessage: {
    type: 'services/not-object',
    required: {
      gradient: 'services/gradient/not-found',
      beard: 'services/beard/not-found',
      eyebrow: 'services/eyebrow/not-found',
    },
    properties: {
      gradient: 'services/gradient/not-boolean',
      beard: 'services/beard/not-boolean',
      eyebrow: 'services/eyebrow/not-boolean',
    },
  },
}

export default schema
