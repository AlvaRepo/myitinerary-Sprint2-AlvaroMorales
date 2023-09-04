import express from 'express';
import create from '../controllers/cities/create.js';
import update from '../controllers/cities/update.js';
import read from '../controllers/cities/read.js';
import readOne from '../controllers/cities/readOne.js';
import destroy from '../controllers/cities/destroy.js';
import carousel from '../controllers/cities/carousel.js';
import readOneCard from '../controllers/cities/readOneCard.js'

let router = express.Router();


// CREATE
router.post('/', create);
// READ
router.get('/', read);
router.get('/carousel', carousel)

router.get('/:city_id', readOne);
router.get('/:city_id', readOneCard);
// UPDATE
router.put('/:c_id', update);
// DELETE
router.delete('/:id', destroy);
export default router;