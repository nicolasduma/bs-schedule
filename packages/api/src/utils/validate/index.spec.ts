import { JSONSchemaType } from 'ajv'

import validate from '.'

const testSchema: JSONSchemaType<string> = {
  type: 'string',
  errorMessage: {
    type: 'test-is-not-string',
  },
}

describe('validate', () => {
  it('should be able to return successfully when validating', () => {
    const { success } = validate('test', testSchema)
    expect(success).toBe(true)
  })

  it('should be able to return with error when validating', () => {
    const { error } = validate(1, testSchema)
    expect(error.message).toBe(testSchema.errorMessage.type)
  })
})
