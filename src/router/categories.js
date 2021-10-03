import express from 'express'

const router = express.Router()
import {GET} from '../controller/categories.js'

router.get('/categories', GET)


export default router