import db from '../lib/postgres.js'

const REGISTER = `
    insert into 
    users (
        name, 
        email, 
        tel_number
    ) values ($1, $2, $3)
    returning *
`

const LOGIN = `
    select 
        *
    from users u
    where 
        case
            when u.email = $1 and u.tel_number = $2 then true
            else false
        end    
`


const userRegister = ({name,email, tel}) => {
     try {
         return db(REGISTER, [name,email, tel])
     } catch (error) {
         
     }
 }
 const userLogin = ({email, tel}) => {
    try {
        return db(LOGIN, [email, tel])
    } catch (error) {
        
    }
}


export {
    userRegister,
    userLogin
}