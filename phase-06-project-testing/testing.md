# Phase 6 - Project Testing

## Test Sequence

### 1. Health API
Expected: HTTP 200 and healthy status.

### 2. Registration
Valid input should create a user and return a JWT.

### 3. Duplicate Registration
Existing email should return HTTP 409.

### 4. Login
Correct credentials should return a JWT.

### 5. Invalid Login
Wrong credentials should return HTTP 401.

### 6. Protected Route
Missing/invalid token should return HTTP 401.

### 7. Add Workout
Valid workout should return HTTP 201.

### 8. Get Workouts
Returns only the authenticated user's workouts.

### 9. Search
Searches workout name/category/date.

### 10. Update
Valid workout ID updates the record.

### 11. Delete
Valid workout ID deletes the record.

### 12. AI Recommendation
Valid profile inputs return a Gemini-generated recommendation.

### 13. AI Insights
Valid statistics return Gemini-generated insights.

## Expected Result
All valid requests should return successful JSON responses. Invalid input should return a meaningful HTTP status and JSON error message.
