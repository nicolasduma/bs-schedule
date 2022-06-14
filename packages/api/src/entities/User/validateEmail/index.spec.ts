import validateEmail from '.'
import schema from './schema'

describe('validate email to make user', () => {
  it('should be able validate', () => {
    const { success } = validateEmail('contato@email.com')
    expect(success).toBe(true)
  })

  it('should not be able to validate without at sign', () => {
    const { error } = validateEmail('contatoemail.com')
    expect(error.message).toBe(schema.errorMessage.format)
  })

  it('should not be able to validate with a number', () => {
    // @ts-ignore
    const { error } = validateEmail(123456)
    expect(error.message).toBe(schema.errorMessage.type)
  })
})
