import validatePassword from '.'
import schema from './schema'

describe('validate password to make user', () => {
  it('should be able validate', () => {
    const { success } = validatePassword('1234567')
    expect(success).toBe(true)
  })

  it('should not be able to validate with few characters', () => {
    const { error } = validatePassword('12345')
    expect(error.message).toBe(schema.errorMessage.minLength)
  })

  it('should not be able to validate with too many characters', () => {
    const { error } = validatePassword('123456789123456789123456789')
    expect(error.message).toBe(schema.errorMessage.maxLength)
  })

  it('should not be able to validate only with spaces', () => {
    const { error } = validatePassword('        ')
    expect(error.message).toBe(schema.errorMessage.minLength)
  })

  it('should not be able to validate with number type', () => {
    // @ts-ignore
    const { error } = validatePassword(1234566)
    expect(error.message).toBe(schema.errorMessage.type)
  })
})
