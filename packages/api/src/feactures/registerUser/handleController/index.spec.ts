/**
 * @jest-environment ./prisma/JestEnvironment
 */

import useRequest from 'supertest'

import app from '#/app'

describe('handle controller of register user', () => {
  it('should be able register user', async () => {
    const resposne = await useRequest(app).post('/user/register').send({
      email: 'contact@email.com',
      password: '123456',
    })

    expect(resposne.status).toBe(201)
  })

  it('should not be able register user without email', async () => {
    const resposne = await useRequest(app).post('/user/register').send({
      password: '123456',
    })

    expect(resposne.status).toBe(400)
    expect(resposne.body.error.message).toBe('email/not-found')
    expect(resposne.body.error.layer).toBe('entity')
  })

  it('should not be able register user with email that already exists', async () => {
    const resposne = await useRequest(app).post('/user/register').send({
      email: 'contact@email.com',
      password: '123456',
    })

    expect(resposne.status).toBe(400)
    expect(resposne.body.error.message).toBe('email/already-exists')
    expect(resposne.body.error.layer).toBe('database')
  })
})
