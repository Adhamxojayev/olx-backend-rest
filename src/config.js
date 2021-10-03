const host = 'localhost'
const PORT = process.env.PORT ?? 5000
const PRIVATE_KEY = 'olx'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path: path.join(process.cwd(), 'src', '.env')})

const pgConfig = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
}



export {
    host,
    PORT,
    pgConfig,
    PRIVATE_KEY
}