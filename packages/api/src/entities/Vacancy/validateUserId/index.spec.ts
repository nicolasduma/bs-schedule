import validateUserId from '.'
import schema from './schema'

describe('validate userId to make vacancy', () => {
  it('should be able validate', () => {
    const { success: userId } = validateUserId(
      'cfb21b3b-6696-4d64-88e0-2e372604725c',
      true
    )

    expect(userId).toBeTruthy()
    expect(typeof userId).toBe('string')
  })

  it('should not be able to validate only with invalid format', () => {
    const { error } = validateUserId('cfb21b3b')
    expect(error.message).toBe(schema.errorMessage.format)
  })

  it('should not be able to validate with number type', () => {
    // @ts-ignore
    const { error } = validateUserId(123456)
    expect(error.message).toBe(schema.errorMessage.type)
  })
})
