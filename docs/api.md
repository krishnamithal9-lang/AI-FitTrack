# FitSense AI API Reference

Base URL:
`http://localhost:5000`

## 1. Health

### GET `/api/health`

No authentication required.

## 2. Register

### POST `/api/auth/register`

Body:
```json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "password": "secret123"
}
```

## 3. Login

### POST `/api/auth/login`

Body:
```json
{
  "email": "rahul@example.com",
  "password": "secret123"
}
```

Copy the returned token.

For protected endpoints add:
```text
Authorization: Bearer YOUR_TOKEN
```

## 4. Profile

### GET `/api/auth/profile`

Protected.

## 5. Add Workout

### POST `/api/workouts`

Protected.

Body:
```json
{
  "workoutName": "Morning Running",
  "category": "Cardio",
  "duration": 30,
  "caloriesBurned": 250,
  "workoutDate": "2026-09-25"
}
```

## 6. Get Workouts

### GET `/api/workouts`

Protected.

## 7. Search

### GET `/api/workouts/search?q=running`

Other examples:
- `/api/workouts/search?category=cardio`
- `/api/workouts/search?date=2026-09-25`

## 8. Get Workout By ID

### GET `/api/workouts/:id`

Protected.

## 9. Update Workout

### PUT `/api/workouts/:id`

Protected.

## 10. Delete Workout

### DELETE `/api/workouts/:id`

Protected.

## 11. AI Recommendation

### POST `/api/ai/recommendation`

Protected.

Body:
```json
{
  "age": 20,
  "fitnessGoal": "general fitness",
  "experienceLevel": "beginner"
}
```

## 12. AI Fitness Insights

### POST `/api/ai/insights`

Protected.

Body:
```json
{
  "totalWorkouts": 12,
  "averageWorkoutDuration": 35,
  "caloriesBurned": 3200
}
```
