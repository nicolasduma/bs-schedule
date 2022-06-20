import { Response, Request, NextFunction } from 'express'

import { generateJWT, makeResult } from '#/utils'

import { usersRepository } from '#/repositories'

import { makeExecuteInteractor } from '../'

const handleController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const executeInteractor = makeExecuteInteractor(usersRepository.adapter)
  const { error } = await executeInteractor(request.body)

  if (error) {
    response.status(400)

    if (error.layer) {
      response.send(makeResult(error))
    } else if (error.message === 'email/not-exists') {
      response.send(makeResult({ layer: 'database', message: error.message }))
    } else {
      response.status(500)
      response.send(makeResult({ message: 'server/there-was-error' }))
    }

    return
  }

  const userToken = generateJWT(request.body)

  response.status(200)
  response.send(makeResult(null, { token: userToken }))

  if (next) next()
}

export default handleController
