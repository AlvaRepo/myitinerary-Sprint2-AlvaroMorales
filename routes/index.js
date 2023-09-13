import express from 'express';
import userRouter from './users.js'
import cityRouter from './cities.js'
import itineraryRouter from './itineraries.js'
import authRouter from './auth.js';
import activityRouter from './activities.js';
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.use('/users', userRouter)
router.use('/activities', activityRouter)
router.use('/cities', cityRouter)
router.use('/itineraries', itineraryRouter)
router.use('/auth', authRouter)

export default router;
