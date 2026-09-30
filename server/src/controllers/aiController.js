import {
  generateWorkoutRecommendation,
  generateFitnessInsights
} from "../services/geminiService.js";

export async function workoutRecommendation(req, res, next) {
  try {
    const { age, fitnessGoal, experienceLevel } = req.body;

    if (!age || !fitnessGoal || !experienceLevel) {
      return res.status(400).json({
        success: false,
        message: "Age, fitnessGoal and experienceLevel are required."
      });
    }

    const numericAge = Number(age);

    if (!Number.isInteger(numericAge) || numericAge < 13 || numericAge > 120) {
      return res.status(400).json({
        success: false,
        message: "Age must be a valid number between 13 and 120."
      });
    }

    const recommendation = await generateWorkoutRecommendation({
      age: numericAge,
      fitnessGoal: String(fitnessGoal).trim(),
      experienceLevel: String(experienceLevel).trim()
    });

    res.json({
      success: true,
      data: {
        recommendation
      }
    });
  } catch (error) {
    next(error);
  }
}

export async function fitnessInsights(req, res, next) {
  try {
    const {
      totalWorkouts,
      averageWorkoutDuration,
      caloriesBurned
    } = req.body;

    const values = [
      totalWorkouts,
      averageWorkoutDuration,
      caloriesBurned
    ];

    if (values.some((value) => value === undefined || value === null)) {
      return res.status(400).json({
        success: false,
        message:
          "totalWorkouts, averageWorkoutDuration and caloriesBurned are required."
      });
    }

    const numbers = values.map(Number);

    if (
      numbers.some((value) => !Number.isFinite(value) || value < 0)
    ) {
      return res.status(400).json({
        success: false,
        message: "Workout statistics must be non-negative numbers."
      });
    }

    const insights = await generateFitnessInsights({
      totalWorkouts: numbers[0],
      averageWorkoutDuration: numbers[1],
      caloriesBurned: numbers[2]
    });

    res.json({
      success: true,
      data: {
        insights
      }
    });
  } catch (error) {
    next(error);
  }
}
