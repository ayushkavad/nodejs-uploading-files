import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    courseContent: [{ type: String, required: true }],
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course',
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Media = mongoose.model('Media', mediaSchema);

export default Media;
