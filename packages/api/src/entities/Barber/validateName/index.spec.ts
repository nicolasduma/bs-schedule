import validateName from '.'
import schema from './schema'

describe('validate name to make user', () => {
  it('should be able validate', () => {
    const { success: name } = validateName('John Doe', true)

    expect(name).toBeTruthy()
    expect(typeof name).toBe('string')
  })

  it('should not be able to validate with few characters', () => {
    const { error } = validateName('Ja')
    expect(error.message).toBe(schema.errorMessage.minLength)
  })

  it('should not be able to validate with too many characters', () => {
    const { error } = validateName('John Doe Smith Miller')
    expect(error.message).toBe(schema.errorMessage.maxLength)
  })

  it('should not be able to validate only with spaces', () => {
    const { error } = validateName('        ')
    expect(error.message).toBe(schema.errorMessage.minLength)
  })

  it('should not be able to validate with number type', () => {
    // @ts-ignore
    const { error } = validateName(123456)
    expect(error.message).toBe(schema.errorMessage.type)
  })
})
