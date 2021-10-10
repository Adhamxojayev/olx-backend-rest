import {adsAdd, adsGet, deleteAds, GETparams} from '../modul/ads.js'
import jwt from '../lib/jwt.js'


const ADD = async (req,res) => {
    try {
        // mock data
        req.headers.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYzMzc2NjQ3Nn0.Ia0U9NuCEPTfIUL5jlQaMMaKsU3D5W1-x4d-cwR-QQs'

        req.body.image = req.fileName
        let user = jwt.verify(req.headers.token)
        req.body.user_id = user.userId
        let added = await adsAdd(req.body)
        if(added.length){
            res.redirect('http://localhost:4000/')
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
        return res.json(ads)
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

const GETPARAMS = async (req,res) => {
    try {
        let ads = await GETparams(req.params)
        return res.json(ads)
    } catch (error) {
        res.json({
            status: 404,
            message: error,
            data: null
        })
    }
}

export {
    ADD,
    GET,
    DELETE,
    GETPARAMS
}