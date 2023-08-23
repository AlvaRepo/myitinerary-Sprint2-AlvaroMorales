import express from 'express';
import create from '../controllers/users/create.js';
import update from '../controllers/users/update.js'
import read from '../controllers/users/read.js';
import readOne from '../controllers/users/readOne.js';
import destroy from '../controllers/users/destroy.js';

let router = express.Router();

//CREATE
router.post('/', create )
//READ
router.get('/:user_id', readOne)
//UPDATE 
router.put('/:u_id', update)
//DELETE
router.delete('/:id', destroy )

//GET
router.get('/', read )
//PUT
router.put('/', update )

export default router
