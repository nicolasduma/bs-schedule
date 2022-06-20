/**
 * @jest-environment ./prisma/JestEnvironment
 */

import useRequest from 'supertest'

import app from '#/app'

describe('handle controller of verify user', () => {
  beforeAll(async () => {
    await useRequest(app).post('/user/register').send({
      email: 'contact@email.com',
      password: '123456',
    })
  })

  it('should be able verify user', async () => {
    const response = await useRequest(app).post('/user/verify').send({
      email: 'contact@email.com',
      password: '123456',
    })

    expect(response.status).toBe(200)
  })

  it('should not be able verify user without email', async () => {
    const response = await useRequest(app).post('/user/verify').send({
      password: '123456',
    })

    console.log(response.body)

    expect(response.status).toBe(400)
    expect(response.body.error.message).toBe('email/not-found')
    expect(response.body.error.layer).toBe('entity')
  })

  it('should not be able verify user with email that does not exist', async () => {
    const response = await useRequest(app).post('/user/verify').send({
      email: 'contact1@email.com',
      password: '123456',
    })

    expect(response.status).toBe(400)
    expect(response.body.error.message).toBe('email/not-exists')
    expect(response.body.error.layer).toBe('database')
  })
})
