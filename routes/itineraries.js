import express from 'express';
import create from '../controllers/itineraries/create.js';
import update from '../controllers/itineraries/update.js'
import read from '../controllers/itineraries/read.js';
import readOne from '../controllers/itineraries/readOne.js';
import destroy from '../controllers/itineraries/destroy.js';

let Itineraryrouter = express.Router();


//CREATE
Itineraryrouter.post('/', create )
//READ
Itineraryrouter.get('/', read )
Itineraryrouter.get('/:_id', readOne)
//UPDATE 
Itineraryrouter.put('/:_id', update)
//DELETE
Itineraryrouter.delete('/:_id', destroy )


export default Itineraryrouter
