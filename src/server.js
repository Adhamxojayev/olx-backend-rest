import express from 'express'
import { host, PORT } from './config.js'
import multer from 'multer'
import path from 'path'
import usersRouter from './router/auth.js'
import addRouter from './router/ads.js'

const app = express()



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), 'src', 'uploads'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)    
        req.fileName = uniqueSuffix + '-' + file.originalname  
    }
})

const upload = multer({ storage: storage })


app.use(express.json())
app.use(upload.single('image'))
app.use(express.static(path.join(process.cwd(), 'src', 'uploads')))
app.use(usersRouter)
app.use(addRouter)


app.listen(PORT, () => console.log(`server run http://${host}:${PORT}`))
