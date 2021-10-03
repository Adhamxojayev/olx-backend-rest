import {categoiresGET} from '../modul/categories.js'



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


export {
    GET
}