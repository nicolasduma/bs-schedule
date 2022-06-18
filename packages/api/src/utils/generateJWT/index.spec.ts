import generateJWT from '.'

describe('generate JWT', () => {
  it('should be able generate a JWT', () => {
    const token = generateJWT({
      email: 'contact@email.com',
      password: '123456',
    })
    expect(typeof token).toBe('string')
  })
})
