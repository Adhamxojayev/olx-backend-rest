import {adsAdd} from '../modul/ads.js'
import jwt from '../lib/jwt.js'


const ADD = async (req,res) => {
    try {
        let user = jwt.verify(req.headers.token)
        req.body.user_id = user.userId
        let added = await adsAdd(req.body)
        if(added.length){
            res.json({
                status: 201,
                message: "reklama qo'shildi",
                data: added
            })
        }
        else throw new Error("reklama qo'shishda hatolik")
    } catch (error) {
        res.json({
            status: 400,
            message: error.message,
            data: null
        })
    }
}

export {
    ADD
}