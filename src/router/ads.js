import express from 'express'

const router = express.Router()

import {ADD,GET,DELETE} from '../controller/ads.js'


router.post('/add', ADD)
      .get('/ads', GET)
      .delete('/ads', DELETE)


export default router