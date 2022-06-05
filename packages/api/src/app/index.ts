import express from 'express'

import router from './router'

const app = express()

app.use(router)
app.use('/', (req, res) => {
  res.send('Hello World')
})

export default app
