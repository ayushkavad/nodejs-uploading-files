import Course from './../models/courseModel.js';

export const getAll = async (req, res, next) => {
  try {
    const data = await Course.find().populate('courseContent');

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

export const createCourse = async (req, res, next) => {
  try {
    const data = await Course.create(req.body);

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
