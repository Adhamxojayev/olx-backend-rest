import express from 'express'
import {GET,POST,POSTcategory} from '../controller/categories.js'

const router = express.Router()


router.get('/categories', GET)
      .post('/categories', POST)
      .post('/category', POSTcategory)


export default router