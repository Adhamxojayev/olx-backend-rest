import {userRegister,userLogin} from '../modul/auth.js'
import jwt from '../lib/jwt.js'


const REGISTER = async (req,res) => {
    try {
        let user = await userRegister(req.body)
        if(user){
            console.log(user);
            res.json({
                status: 201,
                message: 'you are registered',
                token: jwt.sign({userId: user[0].user_id})
            })
        }else throw new Error('there is an error in registration')
    } catch (error) {
        res.json({
            status: 400,
            message: error.message,
            token : null
        })
    }
}

const LOGIN = async (req,res) => {
    try {
        let user = await userLogin(req.body)
        if(user.length){
            res.json({
                status: 200,
                message: 'you are log in',
                token: jwt.sign({userId: user[0].user_id})
            })
        }else throw new Error('email or number error')
    } catch (error) {
        res.json({
            status: 400,
            message: error.message,
            token : null
        })
    }
}



export {
    REGISTER,
    LOGIN
}
