import db from '../lib/postgres.js'

const ADD = `
    insert into 
    ads (
        user_id, 
        category_id, 
        image, 
        name, 
        price, 
        reference
    ) values ($1, $2, $3, $4, $5, $6)
    returning *
`


const adsAdd = ({user_id, category_id, image, name, price, reference}) => {
    try {
        return db(ADD, [user_id, category_id, image, name, price, reference])
    } catch (error) {
        
    }
}

export {
    adsAdd
}