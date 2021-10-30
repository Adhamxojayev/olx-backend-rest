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
const ADSPARAMS = `
    select 
        a.name as title,
        a.image,
        a.price,
        a.reference,
        a.date,
        a.ads_id,
        u.name,
        u.tel_number,
        u.email
        from ads a 
        join users u on u.user_id = a.user_id and a.ads_id = $1
`
const SEARCH = `
    select 
        a.name as title,
        a.image,
        a.price,
        a.reference,
        a.date,
        a.ads_id
    from ads a
    where a.name like $1
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
 const GETparams = ({ads_id}) => {
     try {
        return db(ADSPARAMS, [ads_id])
     } catch (error) {
         
     }
 }

 const adsSearch = ({search}) => {
     try {
         return db(SEARCH, ['%' + search + '%'])
     } catch (error) {
         
     }
 }

export {
    adsAdd,
    adsGet,
    deleteAds,
    GETparams,
    adsSearch
}