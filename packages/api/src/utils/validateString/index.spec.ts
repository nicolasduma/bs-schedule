import validateString from '.'

describe('validate string', () => {
  it('should be able validate', () => {
    const { success } = validateString('test')
    expect(success).toBe(true)
  })

  it('should not be able to validate with a number', () => {
    // @ts-ignore
    const { error } = validateString(12345)
    expect(error.message).toBe('not-string')
  })
})
