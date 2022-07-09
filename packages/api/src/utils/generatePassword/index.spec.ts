import generatePassword from '.'

describe('generate password', () => {
  it('should be able generate a password with 16 chars', () => {
    const password = generatePassword()

    expect(typeof password).toBe('string')
    expect(password.length).toBe(16)
  })
})
