import jwt from 'jsonwebtoken'
import { PRIVATE_KEY } from '../config.js'

export default {
	sign: (payload) => jwt.sign(payload, PRIVATE_KEY),
	verify: (token) => jwt.verify(token, PRIVATE_KEY),
}