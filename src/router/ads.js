import express from 'express'
import {ADD,GET,DELETE,GETPARAMS, SEARCH} from '../controller/ads.js'

const router = express.Router()


router.post('/add', ADD)
      .post('/search', SEARCH)
      .get('/ads', GET)
      .get('/ads/:ads_id', GETPARAMS)
      .delete('/ads', DELETE)

export default router