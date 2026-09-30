# FitSense AI - Personalized Fitness Recommendations Powered by AI

FitSense AI is a secure RESTful backend for workout tracking and AI-assisted fitness guidance.

## Technology
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT authentication
- bcryptjs password hashing
- Google Gemini AI
- CORS
- Postman

## Main Features
1. User registration and login
2. JWT-protected profile API
3. Workout CRUD
4. Workout search by name, category, and date
5. AI workout recommendations
6. AI fitness insights
7. Centralized error handling
8. MongoDB schema validation

## Project Structure

```text
FitSense-AI-Project/
├── README.md
├── .gitignore
├── LICENSE
├── docs/
│   └── api.md
├── phase-01-brainstorming/
│   └── brainstorming.md
├── phase-02-requirement-analysis/
│   └── requirements.md
├── phase-03-project-design/
│   ├── architecture.md
│   └── er-model.md
├── phase-04-project-planning/
│   └── project-plan.md
├── phase-05-project-development/
│   └── development.md
├── phase-06-project-testing/
│   └── testing.md
├── phase-07-project-documentation/
│   └── documentation.md
├── phase-08-project-demonstration/
│   └── demo-script.md
└── server/
    ├── package.json
    ├── .env.example
    ├── src/
    │   ├── app.js
    │   ├── server.js
    │   ├── config/db.js
    │   ├── controllers/authController.js
    │   ├── controllers/workoutController.js
    │   ├── controllers/aiController.js
    │   ├── middleware/authMiddleware.js
    │   ├── middleware/errorMiddleware.js
    │   ├── models/User.js
    │   ├── models/Workout.js
    │   ├── routes/authRoutes.js
    │   ├── routes/workoutRoutes.js
    │   ├── routes/aiRoutes.js
    │   ├── services/geminiService.js
    │   └── utils/jwt.js
    └── postman/FitSense.postman_collection.json
```

## Requirements
- Node.js 18+ recommended
- MongoDB local installation or MongoDB Atlas
- Google Gemini API key
- Postman (optional, for API testing)

## Setup

### 1. Open the server folder
```bash
cd server
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env`
Copy `.env.example` to `.env` and set your values.

Example:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/fitsense
JWT_SECRET=change_this_to_a_long_random_secret
JWT_EXPIRES_IN=1d
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-2.5-flash
CLIENT_ORIGIN=*
```

**Never upload `.env` or a real API key to GitHub.**

### 4. Start the server
Development:
```bash
npm run dev
```

Production-style:
```bash
npm start
```

The API will run at:
`http://localhost:5000`

Health check:
`GET http://localhost:5000/api/health`

## API Summary

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/profile`

### Workouts
- `POST /api/workouts`
- `GET /api/workouts`
- `GET /api/workouts/search?q=running`
- `GET /api/workouts/:id`
- `PUT /api/workouts/:id`
- `DELETE /api/workouts/:id`

### AI
- `POST /api/ai/recommendation`
- `POST /api/ai/insights`

Protected endpoints require:
```text
Authorization: Bearer <JWT_TOKEN>
```

## Important
The project document supplied for this project describes the backend as both "FitSense" and "FitTrack AI". This repository uses **FitSense AI** as the project/repository name while retaining the same backend functionality described in the document.
