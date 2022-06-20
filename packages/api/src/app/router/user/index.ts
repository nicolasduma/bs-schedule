import { Router } from 'express'

import { registerUserFeacture, verifyUser } from '#/feactures'

const userRouter = Router()

userRouter.post('/register', (req, res, next) =>
  registerUserFeacture.handleController(req, res, next)
)

userRouter.post('/verify', (req, res, next) =>
  verifyUser.handleController(req, res, next)
)

export default userRouter
