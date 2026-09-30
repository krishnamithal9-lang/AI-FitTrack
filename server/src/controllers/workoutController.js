import mongoose from "mongoose";
import Workout from "../models/Workout.js";

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function validateWorkoutInput(body) {
  const required = ["workoutName", "category", "duration", "caloriesBurned", "workoutDate"];
  const missing = required.filter(
    (field) => body[field] === undefined || body[field] === null || body[field] === ""
  );

  return missing;
}

export async function createWorkout(req, res, next) {
  try {
    const missing = validateWorkoutInput(req.body);

    if (missing.length) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missing.join(", ")}`
      });
    }

    const workout = await Workout.create({
      ...req.body,
      user: req.user._id
    });

    res.status(201).json({
      success: true,
      message: "Workout created successfully.",
      data: workout
    });
  } catch (error) {
    next(error);
  }
}

export async function getWorkouts(req, res, next) {
  try {
    const workouts = await Workout.find({ user: req.user._id })
      .sort({ workoutDate: -1, createdAt: -1 });

    res.json({
      success: true,
      count: workouts.length,
      data: workouts
    });
  } catch (error) {
    next(error);
  }
}

export async function searchWorkouts(req, res, next) {
  try {
    const { q, category, date } = req.query;
    const filter = { user: req.user._id };

    if (q) {
      filter.$or = [
        { workoutName: { $regex: escapeRegex(q), $options: "i" } },
        { category: { $regex: escapeRegex(q), $options: "i" } }
      ];
    }

    if (category) {
      filter.category = { $regex: escapeRegex(category), $options: "i" };
    }

    if (date) {
      if (!/^\\d{4}-\\d{2}-\\d{2}$/.test(date)) {
        return res.status(400).json({
          success: false,
          message: "Date must be in YYYY-MM-DD format."
        });
      }

      const start = new Date(`${date}T00:00:00.000Z`);
      const end = new Date(`${date}T23:59:59.999Z`);

      if (Number.isNaN(start.getTime())) {
        return res.status(400).json({
          success: false,
          message: "Date must be in YYYY-MM-DD format."
        });
      }

      filter.workoutDate = { $gte: start, $lte: end };
    }

    const workouts = await Workout.find(filter).sort({
      workoutDate: -1,
      createdAt: -1
    });

    res.json({
      success: true,
      count: workouts.length,
      data: workouts
    });
  } catch (error) {
    next(error);
  }
}

export async function getWorkoutById(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid workout ID."
      });
    }

    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!workout) {
      return res.status(404).json({
        success: false,
        message: "Workout not found."
      });
    }

    res.json({
      success: true,
      data: workout
    });
  } catch (error) {
    next(error);
  }
}

export async function updateWorkout(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid workout ID."
      });
    }

    const allowed = [
      "workoutName",
      "category",
      "duration",
      "caloriesBurned",
      "workoutDate"
    ];

    const updates = {};
    for (const key of allowed) {
      if (req.body[key] !== undefined) updates[key] = req.body[key];
    }

    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      updates,
      { new: true, runValidators: true }
    );

    if (!workout) {
      return res.status(404).json({
        success: false,
        message: "Workout not found."
      });
    }

    res.json({
      success: true,
      message: "Workout updated successfully.",
      data: workout
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteWorkout(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid workout ID."
      });
    }

    const workout = await Workout.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!workout) {
      return res.status(404).json({
        success: false,
        message: "Workout not found."
      });
    }

    res.json({
      success: true,
      message: "Workout deleted successfully."
    });
  } catch (error) {
    next(error);
  }
}
