import express from 'express'
import cookieParser from 'cookie-parser'
import { host, PORT } from './config.js'
import multer from 'multer'
import path from 'path'
import usersRouter from './router/auth.js'
import addRouter from './router/ads.js'
import categoiresRouter from './router/categories.js'

const app = express()

app.use(cookieParser())
app.use(express.json())


app.use( (req,res,next) => {
    res.set({"Access-Control-Allow-Origin":  "http://localhost:4000",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type"
        })
    next()
})


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

app.use(express.urlencoded({extended: true}))
app.use(upload.single('image'))
app.use(express.static(path.join(process.cwd(), 'src', 'uploads')))
app.use(usersRouter)
app.use(addRouter) 
app.use(categoiresRouter)


app.listen(PORT, () => console.log(`server run http://${host}:${PORT}`))