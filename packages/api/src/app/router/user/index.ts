import { Router } from 'express'

import { registerUserFeacture } from '#/feactures'

const userRouter = Router()

userRouter.post('/register', (req, res, next) =>
  registerUserFeacture.handleController(req, res, next)
)

export default userRouter
