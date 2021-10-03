import express from 'express'

const router = express.Router()

import {ADD,GET} from '../controller/ads.js'


router.post('/add', ADD)
      .get('/ads', GET)


export default router