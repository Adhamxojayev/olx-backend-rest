import express from 'express'

const router = express.Router()

import {ADD,GET,DELETE,GETPARAMS} from '../controller/ads.js'


router.post('/add', ADD)
      .get('/ads', GET)
      .get('/ads/:ads_id', GETPARAMS)
      .delete('/ads', DELETE)


export default router