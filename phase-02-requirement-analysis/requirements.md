# Phase 2 - Requirement Analysis

## Functional Requirements

### Authentication
1. User can register.
2. User can log in.
3. System generates JWT after successful login.
4. User can access a protected profile endpoint.
5. Passwords are hashed before storage.

### Workout Management
1. Authenticated user can add a workout.
2. User can view all own workouts.
3. User can retrieve one workout.
4. User can update a workout.
5. User can delete a workout.
6. User can search by workout name/category/date.

### AI
1. User can submit age, fitness goal and experience level.
2. System sends the information to Gemini.
3. System returns a personalized general workout recommendation.
4. User can submit workout statistics.
5. System returns AI-generated fitness insights.

## Non-Functional Requirements
- Secure authentication
- Input validation
- Modular architecture
- JSON responses
- Maintainability
- Scalability
- Error handling
- Environment-variable based secrets

## Software Requirements
- Windows/macOS/Linux
- Node.js 18+ recommended
- npm
- Express
- MongoDB
- Mongoose
- Postman
- VS Code

## Hardware Requirements
- Intel Core i5 / AMD Ryzen 5 or equivalent
- 8 GB RAM minimum
- 1 GB available storage
