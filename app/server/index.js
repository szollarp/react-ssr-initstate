import path from 'path'
import express from 'express'
import cors from 'cors'

import router from './router'

const app = express()
const port = process.env.PORT || 9000

app.use(cors({ origin: '*', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' }))
app.use('/static', express.static(path.resolve(process.cwd(), 'build')))
app.get('*', router)

app.listen(port)
console.log(`Listening at http://localhost:${port}`)