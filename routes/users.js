import express from 'express';
import create from '../controllers/users/create.js';
import update from '../controllers/users/update.js'
import read from '../controllers/users/read.js';
import readOne from '../controllers/users/readOne.js';
import destroy from '../controllers/users/destroy.js';

let userRouter = express.Router();

//CREATE
userRouter.post('/signup', create )
//READ
userRouter.get('/:user_id', readOne)
//UPDATE 
userRouter.put('/:u_id', update)
//DELETE
userRouter.delete('/:id', destroy )

//GET
userRouter.get('/', read )
//PUT
userRouter.put('/', update )

export default userRouter
