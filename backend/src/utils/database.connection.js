import mongoose from 'mongoose'
import {DB_connection_String} from '../configs/index.js'
import logger from './logger.js'

let database
const { connection } = mongoose;
export  const connect=async()=>{
if(database) return database
const mongoDburi=DB_connection_String
mongoose.connect(mongoDburi).then((connection)=>{
    database=connection
    logger.info('Connted with data base')
}).catch((erro)=>{
    logger.error(`Db connection faild errr:${erro}`,)
})
}

