import validateDescription from '.'
import schema from './schema'

describe('validate description to make user', () => {
  it('should be able validate', () => {
    const { success: description } = validateDescription(
      'Lorem Ipsum is a simple text',
      true
    )

    expect(description).toBeTruthy()
    expect(typeof description).toBe('string')
  })

  it('should not be able to validate with few characters', () => {
    const { error } = validateDescription('Lo')
    expect(error.message).toBe(schema.errorMessage.minLength)
  })

  it('should not be able to validate with too many characters', () => {
    const { error } = validateDescription('Lorem Ipsum is simply dummy text')
    expect(error.message).toBe(schema.errorMessage.maxLength)
  })

  it('should not be able to validate only with spaces', () => {
    const { error } = validateDescription('        ')
    expect(error.message).toBe(schema.errorMessage.minLength)
  })

  it('should not be able to validate with number type', () => {
    // @ts-ignore
    const { error } = validateDescription(123456)
    expect(error.message).toBe(schema.errorMessage.type)
  })
})
