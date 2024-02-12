import dotenv from 'dotenv'
dotenv.config()

export const DB_connection_String = process.env.MONGO_DB_URL;