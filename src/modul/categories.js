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

const POSTcategory = `
    insert into categories_category (category_id, id, name)
    values ($1, $2, $3)
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

const POSTcateg = ({category_id, id, name}) => {
    try {
        return db(POSTcategory, [category_id, id, name])
    } catch (error) {
        
    }
}

export {
    categoiresGET,
    categoriesPOST,
    POSTcateg
}