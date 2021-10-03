import express from 'express'

const router = express.Router()

import {ADD} from '../controller/ads.js'


router.post('/add', ADD)


export default router