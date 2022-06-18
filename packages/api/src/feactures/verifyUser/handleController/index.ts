import { Response, Request, NextFunction } from 'express'

import { generateJWT } from '#/utils'

import { usersRepository } from '#/repositories'

import makeExecuteInteractor from '../makeExecuteInteractor'

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
      response.send(error)
    } else if (error.message === 'email/not-exists') {
      response.send({ layer: 'database', message: error.message })
    } else {
      response.status(500)
      response.send({ message: 'server/there-was-error' })
    }

    return
  }

  const userToken = generateJWT(request.body)

  response.status(200)
  response.send({ token: userToken })

  if (next) next()
}

export default handleController
