import express from 'express'
import { host, PORT } from './config.js'
import usersRouter from './router/auth.js'
import addRouter from './router/ads.js'

const app = express()

app.use(express.json())
app.use(usersRouter)
app.use(addRouter)




app.listen(PORT, () => console.log(`server run http://${host}:${PORT}`))
