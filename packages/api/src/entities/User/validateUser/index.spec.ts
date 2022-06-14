import validateUser from '.'
import { Contract } from '../'

const testUser: Contract = {
  email: 'contact@email.com',
  password: '123456',
}

describe('validate user to make it', () => {
  it('should be able validate', () => {
    const { success } = validateUser(testUser)
    expect(success).toBe(true)
  })

  it('should not be able to validate without email', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { email, ...testUserCopy } = testUser
    // @ts-ignore
    const { error } = validateUser(testUserCopy)
    expect(error.message).toBe('email/not-found')
  })

  it('should not be able to validate with invalid email', () => {
    const { error } = validateUser({ ...testUser, email: ' ' })
    expect(error.message).toBeTruthy()
  })

  it('should not be able to validate without password', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...testUserCopy } = testUser
    // @ts-ignore
    const { error } = validateUser(testUserCopy)
    expect(error.message).toBe('password/not-found')
  })

  it('should not be able to validate with invalid password', () => {
    const { error } = validateUser({ ...testUser, password: ' ' })
    expect(error.message).toBeTruthy()
  })
})
