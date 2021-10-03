import {adsAdd, adsGet, deleteAds} from '../modul/ads.js'
import jwt from '../lib/jwt.js'


const ADD = async (req,res) => {
    try {
        req.body.image = req.fileName
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

const GET = async (req,res) => {
    try {
        let ads = await adsGet()
        res.json(ads)
    } catch (error) {
        res.json({
            status: 404,
            message: error,
            data: null
        })
    }
}

const DELETE = async (req,res) => {
    try {
        let ads = await deleteAds(req.body)
        if(ads.length) {
            res.json({
                status: 200,
                message: "ads deleted",
                data: ads
            })
        }
        else throw new Error("error in deleting the ad")
    } catch (error) {
        res.json({
            status: 400,
            message: error.message,
            data: null
        })
    }
}

export {
    ADD,
    GET,
    DELETE
}