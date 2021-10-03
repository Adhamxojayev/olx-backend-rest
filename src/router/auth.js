import express from 'express'
import {REGISTER, LOGIN} from '../controller/auth.js'


const router = express.Router()

router.post('/register', REGISTER)
      .post('/login', LOGIN)



export default router