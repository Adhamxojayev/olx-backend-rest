import db from '../lib/postgres.js'
import moment  from 'moment'
import 'moment/locale/uz-latn.js'

const ADD = `
    insert into 
    ads (
        user_id, 
        category_id, 
        image, 
        name, 
        price, 
        reference,
        date
    ) values ($1, $2, $3, $4, $5, $6, $7)
    returning *
`
const GET = `
    select 
        * 
    from ads
`
const DELETE = `
    delete from 
    ads
    where ads_id = $1
    returning *
`



const adsAdd = ({user_id, category_id, image, name, price, reference}) => {
    try {
        let date = moment().format('LLLL')
        image = 'http://localhost:5000/' + image
        return db(ADD, [user_id, category_id, image, name, price, reference, date])
    } catch (error) {
        
    }
}

const adsGet = () => {
    try {
        return db(GET)
    } catch (error) {
        
    }
}

const deleteAds = ({adsId}) => {
    try {
        return db(DELETE, [adsId])
    } catch (error) {
        
    }
}

export {
    adsAdd,
    adsGet,
    deleteAds
}