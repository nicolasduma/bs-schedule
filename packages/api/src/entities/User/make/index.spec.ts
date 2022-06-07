import make from '.'

const fakeUser = {
  email: 'contato@email.com',
  password: '123456',
}

describe('make user', () => {
  it('should be able make a user', () => {
    const { error } = make(fakeUser)
    expect(error).toBe(false)
  })

  it('should not be able make user without email', () => {
    const fakeUserCopy = { ...fakeUser, email: '' }
    const { error } = make(fakeUserCopy)
    expect(error.msg).toBe('invalid-email')
  })

  it('should not be able make user without password', () => {
    const fakeUserCopy = { ...fakeUser, password: '' }
    const { error } = make(fakeUserCopy)
    expect(error.msg).toBe('invalid-password')
  })
})
