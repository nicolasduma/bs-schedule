import generatePasswordHash from '.'

describe('generate password hash', () => {
  it('should be able generate a password hash', () => {
    const passwordHash = generatePasswordHash('password')
    expect(typeof passwordHash).toBe('string')
  })
})
