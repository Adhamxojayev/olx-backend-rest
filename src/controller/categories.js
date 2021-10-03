import {categoiresGET,categoriesPOST} from '../modul/categories.js'
import jwt from '../lib/jwt.js'




const GET = async (req,res) => {
    try {
        let categories = await categoiresGET()
        res.json(categories)
    } catch (error) {
        res.json({
            status: 404,
            message: error,
            data: null
        })
    }
}

const POST = async (req,res) => {
    try {
        let user = jwt.verify(req.headers.token)
        if(user.userId == 7){
            let categories = await categoriesPOST(req.body)
                if(categories.length){
                res.json({
                    status: 201,
                    message: 'categoires added',
                    data: categories
                })
            }
            else throw new Error('an error occurred while adding a category')
    
        }
        else throw new Error('an error occurred while adding a category')
    } catch (error) {
        res.json({
            status: 400,
            message: error.message,
            data: null
        })
    }
}


export {
    GET,
    POST
}