import { Response, Request, NextFunction } from 'express'

import { makeResult } from '@bs-schedule/utils'

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
    } else if (error.code === 'P2002') {
      response.send(
        makeResult({ layer: 'database', message: 'email/already-exists' })
      )
    } else {
      response.status(500)
      response.send(makeResult({ message: 'server/there-was-error' }))
    }

    return
  }

  response.status(201)
  response.send(makeResult(null))

  if (next) next()
}

export default handleController
