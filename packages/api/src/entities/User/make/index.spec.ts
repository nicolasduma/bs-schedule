import { validate as validateUUID } from 'uuid'

import make from '.'

import { DatasContract } from '..'

const testUser: DatasContract = {
  authMethod: 'form',
  email: 'contact@email.com',
  password: '123456',
}

describe('make user', () => {
  it('should be able make a user', () => {
    const { success: user } = make(testUser)

    expect(user.email).toBe(testUser.email)
    expect(user.password).toBe(testUser.password)
    expect(validateUUID(user.id)).toBe(true)
  })

  it('should not be able make user without email', () => {
    const { error } = make({ ...testUser, email: '' })

    expect(error).not.toBeFalsy()
    expect(error.layer).toBe('entity')
  })
})
