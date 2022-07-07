/**
 * @jest-environment ./prisma/JestEnvironment
 */

import useRequest from 'supertest'

import app from '#/app'

import { userEntity } from '#/entities'

const userTest: userEntity.Contract = {
  authMethod: 'form',
  email: 'contact@email.com',
  password: '123456',
}

describe('handle controller of register user', () => {
  it('should be able register user', async () => {
    const resposne = await useRequest(app).post('/user/register').send(userTest)

    expect(resposne.status).toBe(201)
  })

  it('should not be able register user without email', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { email, ...userTestWithoutEmail } = userTest

    const resposne = await useRequest(app)
      .post('/user/register')
      .send(userTestWithoutEmail)

    expect(resposne.status).toBe(400)
    expect(resposne.body.error.message).toBe('email/not-found')
    expect(resposne.body.error.layer).toBe('entity')
  })

  it('should not be able register user with email that already exists', async () => {
    const resposne = await useRequest(app).post('/user/register').send(userTest)

    expect(resposne.status).toBe(400)
    expect(resposne.body.error.message).toBe('email/already-exists')
    expect(resposne.body.error.layer).toBe('database')
  })
})
