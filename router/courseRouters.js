import express from 'express';
import uploadRouters from './uploadRoutes.js';
import { getAll, createCourse } from './../controllers/courseController.js';

const router = express.Router();

router.use('/:courseID/uploads', uploadRouters);

router.route('/').get(getAll).post(createCourse);

export default router;
