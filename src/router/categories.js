import express from 'express'

const router = express.Router()
import {GET,POST,POSTcategory} from '../controller/categories.js'

router.get('/categories', GET)
      .post('/categories', POST)
      .post('/category', POSTcategory)


export default router