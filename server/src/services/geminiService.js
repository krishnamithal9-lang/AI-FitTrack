import { GoogleGenAI } from "@google/genai";

function getClient() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    const error = new Error("GEMINI_API_KEY is missing in the .env file.");
    error.statusCode = 503;
    throw error;
  }

  return new GoogleGenAI({ apiKey });
}

function cleanText(text) {
  return String(text || "").trim();
}

export async function generateWorkoutRecommendation({
  age,
  fitnessGoal,
  experienceLevel
}) {
  const ai = getClient();
  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";

  const prompt = `
You are FitSense AI, a fitness guidance assistant.
Create a safe, general workout recommendation from the following information.

Age: ${age}
Fitness goal: ${fitnessGoal}
Experience level: ${experienceLevel}

Return a practical weekly plan with:
1. Weekly schedule
2. Suggested exercises
3. Training tips
4. Safety recommendations

Do not diagnose medical conditions. Encourage professional medical guidance when the user has an injury, illness, or medical concern.
Keep the answer clear and structured.
`;

  const response = await ai.models.generateContent({
    model,
    contents: prompt
  });

  return cleanText(response.text);
}

export async function generateFitnessInsights({
  totalWorkouts,
  averageWorkoutDuration,
  caloriesBurned
}) {
  const ai = getClient();
  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";

  const prompt = `
You are FitSense AI.
Analyze these workout statistics and provide a concise fitness progress summary.

Total workouts: ${totalWorkouts}
Average workout duration in minutes: ${averageWorkoutDuration}
Total calories burned: ${caloriesBurned}

Return:
1. Performance analysis
2. Improvement suggestions
3. Motivational advice
4. Fitness progress summary

Use the supplied numbers only. Do not diagnose medical conditions.
`;

  const response = await ai.models.generateContent({
    model,
    contents: prompt
  });

  return cleanText(response.text);
}
