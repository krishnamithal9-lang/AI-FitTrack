# Phase 3 - Project Design

## Architecture

```text
Client / Postman / React / Mobile App
                 |
                 v
          Express Server
                 |
          Authentication
            Middleware
                 |
                 v
              Routes
                 |
                 v
           Controllers
             /      \
            v        v
        Services    Models
           |          |
           v          v
      Gemini AI     Mongoose
                      |
                      v
                   MongoDB
```

## MVC Mapping

### Model
- User
- Workout

### View/API Consumer
- Postman
- React application
- Mobile application

### Controller
- Authentication controller
- Workout controller
- AI controller

### Services
- Gemini AI service
- JWT utility
- Password hashing logic

### Middleware
- JWT authentication
- Centralized error handling
