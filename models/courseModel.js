import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

courseSchema.virtual('courseContent', {
  ref: 'Media',
  foreignField: 'course',
  localField: '_id',
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
