import verifyPassword from '.'

const password = 'password'
const passwordHash =
  '$2a$10$W4sc.IAOWCdQzTCa6JXv6.C27joAmt0ZyTwwiEc3D8NvYQwZmz0jO'

describe('verify password', () => {
  it('should be able verify a correct password', () => {
    const { success: isCorrect } = verifyPassword(password, passwordHash)
    expect(isCorrect).toBe(true)
  })

  it('should not be able verify an incorrect password', () => {
    const { error } = verifyPassword('123456', passwordHash)
    expect(error.message).toBe('password/incorrect')
  })
})
