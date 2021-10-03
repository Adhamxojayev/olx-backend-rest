import db from '../lib/postgres.js'
import md5 from 'md5'

const REGISTER = `
    insert into 
    users (
        name, 
        password, 
        email, 
        tel_number
    ) values ($1, $2, $3, $4)
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


const userRegister = ({name, password, email, tel}) => {
     try {
         password = md5(password)
         return db(REGISTER, [name, password, email, tel])
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