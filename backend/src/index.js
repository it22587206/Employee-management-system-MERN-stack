import express from 'express';
import logger from './utils/logger.js'
import  cors from 'cors'
import dotenv from 'dotenv'
import ememployee from './routes/employee.routes.js'
const app = express();
dotenv.config()

const PORT = process.env.PORT || 3000;
app.use(express.json());
const config={
  credential:true,
  origin:true
}
app.use(cors())

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

//routes

app.use('/employee', ememployee)

// app.use(json());
