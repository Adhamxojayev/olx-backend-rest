import express from 'express'

const router = express.Router()
import {GET,POST} from '../controller/categories.js'

router.get('/categories', GET)
      .post('/categories', POST)


export default router