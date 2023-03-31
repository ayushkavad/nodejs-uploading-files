import path from 'path';
import multer from 'multer';
import Media from '../models/mediaModel.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/videos');
  },
  filename: function (req, file, cb) {
    req.files.filename = `${Date.now()}.mp4`;
    cb(null, Date.now() + req.files.filename);
  },
});

const multerFilter = (req, file, cb) => {
  var ext = path.extname(file.originalname);

  if (ext !== '.mkv' && ext !== '.mp4') {
    return cb(new Error('Only videos are allowed!'));
  }

  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: multerFilter,
});

export const videosUpload = upload.fields([
  { name: 'courseContent', maxCount: 50 },
]);

export const videoProcess = (req, res, next) => {
  req.body.courseContent = [];
  req.files.courseContent.forEach((media) => {
    req.body.courseContent.push(media.path);
  });
  next();
};

export const getAllUploads = async (req, res, next) => {
  try {
    const data = await Media.find().select('-__v');

    res.status(200).json({
      status: 'success',
      data: {
        data,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const uploadFiles = async (req, res, next) => {
  try {
    if (!req.body.course) req.body.course = req.params.courseID;
    const data = await await Media.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        data,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// https://github.com/SachinKalsi/video-upload-and-video-streaming
