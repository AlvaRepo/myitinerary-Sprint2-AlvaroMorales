import express from 'express';
import register from '../controllers/auth/register.js';
import isUserCreated from '../middlewares/isUserCreated.js';
import validator from '../middlewares/validator.js';
import registerSchema from '../schemas/register.js';
import isValidPass from '../middlewares/isValidPass.js';
let authRouter = express.Router();


// authRouter.post('/signup'), register);
//validad joi, validad no existe cuenta y hashear
authRouter.post('/register', validator(registerSchema), isUserCreated, isValidPass, register)

export default authRouter
