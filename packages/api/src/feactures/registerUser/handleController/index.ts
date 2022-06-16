import { Response, Request, NextFunction } from 'express'

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
    } else if (error.code === 'P2002') {
      response.send({ layer: 'database', message: 'email/alredy-exists' })
    } else {
      response.status(500)
      response.send({ message: 'server/there-was-error' })
    }

    return
  }

  response.status(201)
  response.send({ created: true })

  if (next) next()
}

export default handleController
