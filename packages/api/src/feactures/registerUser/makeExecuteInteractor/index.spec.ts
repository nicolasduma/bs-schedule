import { userEntity } from '#/entities'

import { usersRepository } from '#/repositories'

import makeExecuteInteractor from '.'

jest.spyOn(usersRepository.inMemory, 'save')

const testUser: userEntity.Contract = {
  authMethod: 'form',
  email: 'contato@email.com',
  password: '123456',
}

const executeInteractor = makeExecuteInteractor(usersRepository.inMemory)

describe('make execute interactor of register user', () => {
  it('should be able register user', async () => {
    const { success } = await executeInteractor({ user: testUser })

    expect(success).toBe(true)
    expect(usersRepository.inMemory.save).toHaveBeenCalled()
  })

  it('should not be able register user with invalid email', async () => {
    const { error } = await executeInteractor({
      user: { ...testUser, email: '' },
    })

    expect(error.message).toBeTruthy()
  })
})
