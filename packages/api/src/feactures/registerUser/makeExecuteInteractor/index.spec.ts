import makeExecuteInteractor from '.'

const spies = {
  save: jest.fn(),
}

const testUser = {
  email: 'contato@email.com',
  password: '123456',
}

const executeInteractor = makeExecuteInteractor(spies)

describe('make execute interactor of register user', () => {
  it('should be able register user', async () => {
    const { success } = await executeInteractor(testUser)

    expect(success).toBe(true)
    expect(spies.save).toHaveBeenCalled()
  })

  it('should not be able register user with invalid email', async () => {
    const testUserCopy = { ...testUser, email: '' }
    const { error } = await executeInteractor(testUserCopy)

    expect(error.message).toBeTruthy()
  })
})
