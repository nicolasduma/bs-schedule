import express from 'express'

import bodyParcer from 'body-parser'
import cors from 'cors'

import router from './router'

const app = express()

app.use(cors())
app.use(bodyParcer.json())
app.use(router)

export default app
