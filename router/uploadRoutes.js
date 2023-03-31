import express from 'express';
import {
  videosUpload,
  videoProcess,
  getAllUploads,
  uploadFiles,
} from './../controllers/uploadController.js';

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getAllUploads)
  .post(videosUpload, videoProcess, uploadFiles);

export default router;
