import express from 'express';
import { userSignup } from '../controller/userController.js';
const app = express.Router()

app.route('/').post(userSignup)

export default app