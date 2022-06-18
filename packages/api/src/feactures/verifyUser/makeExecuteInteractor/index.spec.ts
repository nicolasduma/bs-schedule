import { usersRepository } from '#/repositories'

import makeExecuteInteractor from '.'

jest.spyOn(usersRepository.inMemory, 'findByEmail')

const testUser = {
  email: 'contact1@email.com',
  password: '123456',
}

const executeInteractor = makeExecuteInteractor(usersRepository.inMemory)

describe('make execute interactor of verify user', () => {
  it('should be able verify user', async () => {
    const { success } = await executeInteractor(testUser)

    expect(success).toBe(true)
    expect(usersRepository.inMemory.findByEmail).toHaveBeenCalled()
  })

  it('should not be able verify user with invalid email', async () => {
    const { error } = await executeInteractor({ ...testUser, email: '' })

    expect(error.message).toBeTruthy()
  })

  it('should not be able verify user with email that does not exist', async () => {
    const { error } = await executeInteractor({
      ...testUser,
      email: 'contact@email.io',
    })

    expect(error.message).toBe('email/not-exists')
    expect(usersRepository.inMemory.findByEmail).toHaveBeenCalled()
  })

  it('should not be able verify user with incorect password', async () => {
    const { error } = await executeInteractor({
      ...testUser,
      password: 'password',
    })

    expect(error.message).toBe('password/incorrect')
    expect(usersRepository.inMemory.findByEmail).toHaveBeenCalled()
  })

  it('should not be able verify user with internal error', async () => {
    // @ts-ignore
    usersRepository.inMemory.findByEmail = () => {
      throw new Error('error')
    }
    jest.spyOn(usersRepository.inMemory, 'findByEmail')

    const executeInteractor = makeExecuteInteractor(usersRepository.inMemory)
    const { error } = await executeInteractor(testUser)

    expect(error).toBeTruthy()
    expect(usersRepository.inMemory.findByEmail).toHaveBeenCalled()
  })
})
