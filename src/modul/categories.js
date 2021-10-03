import db from '../lib/postgres.js'

const GET = `
    select 
        c.name,
        json_agg(ctc.name) as category
    from categories c  
    join categories_category ctc on ctc.category_id = c.category_id 
    group by c.name;
`

const POST = `
    insert into 
    categories (name)
    values ($1)
    returning *
`


const categoiresGET = () => { 
    try {
        return db(GET)
    } catch (error) {
    
    }
}


const categoriesPOST = ({name}) => {
    try {
        console.log(name);
        return db(POST, [name])
    } catch (error) {
        
    }
}

export {
    categoiresGET,
    categoriesPOST
}