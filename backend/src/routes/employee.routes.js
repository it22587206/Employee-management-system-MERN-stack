import express from 'express'
import  {addemployeeController} from '../controller/employee.controller.js'
const router= express.Router();

router.post('/addemployee',addemployeeController)

export default router