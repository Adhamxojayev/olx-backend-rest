import express from 'express'

const router = express.Router()

import {ADD,GET,DELETE,GETPARAMS, SEARCH} from '../controller/ads.js'


router.post('/add', ADD)
      .post('/search', SEARCH)
      .get('/ads', GET)
      .get('/ads/:ads_id', GETPARAMS)
      .delete('/ads', DELETE)

export default router