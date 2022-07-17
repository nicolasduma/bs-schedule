import express from 'express'

import bodyParcer from 'body-parser'
import cors from 'cors'

import router from './router'

const app = express()

const corsOptions = {
  origin: true,
  preflightContinue: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}

app.use(cors(corsOptions))
app.use(bodyParcer.json())
app.use(router)

export default app
