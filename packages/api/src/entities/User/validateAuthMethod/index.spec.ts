import validateAuthMethod from '.'
import schema from './schema'

describe('validate authMethod to make user', () => {
  it('should be able validate', () => {
    const { success } = validateAuthMethod('form')

    expect(success).toBe(true)
  })

  it('should not be able to validate with a number', () => {
    // @ts-ignore
    const { error } = validateAuthMethod(123456)

    expect(error.message).toBe(schema.errorMessage.type)
  })

  it('should not be able to validate with a invalid value', () => {
    // @ts-ignore
    const { error } = validateAuthMethod('email')

    expect(error.message).toBe(schema.errorMessage.enum)
  })
})
