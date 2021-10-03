import { pgConfig } from '../config.js'
import pg from 'pg'

const pool = new pg.Pool(pgConfig)

async function fetch (query, array) {
    const client = await pool.connect()
    try {
        
        const {rows} = await client.query(query, array != undefined ? array : null)
        return rows
    } catch (error) {

        console.log(error);

    }finally{
        await client.release()
    }
}

export default fetch






