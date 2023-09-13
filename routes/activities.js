import express from 'express';
import read from '../controllers/activities/read.js';

const router = express.Router();

// Ruta para obtener todas las actividades
router.get('/', read);

export default router;