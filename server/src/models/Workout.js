import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    workoutName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    },
    category: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80
    },
    duration: {
      type: Number,
      required: true,
      min: 1
    },
    caloriesBurned: {
      type: Number,
      required: true,
      min: 0
    },
    workoutDate: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

workoutSchema.index({ user: 1, workoutDate: -1 });
workoutSchema.index({ user: 1, workoutName: "text", category: "text" });

export default mongoose.model("Workout", workoutSchema);
