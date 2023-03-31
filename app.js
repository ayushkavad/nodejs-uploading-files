import express from 'express';
import courses from './router/courseRouters.js';
import uploads from './router/uploadRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/v1/courses', courses);
app.use('/api/v1/upload', uploads);

export default app;
