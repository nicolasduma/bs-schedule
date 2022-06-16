import express from 'express'

import bodyParcer from 'body-parser'

import router from './router'

const app = express()

app.use(bodyParcer.json())
app.use(router)

export default app
