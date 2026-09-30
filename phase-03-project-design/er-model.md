# Entity Relationship Model

```text
+-------------------+
|       USER        |
+-------------------+
| _id (PK)          |
| name              |
| email (UNIQUE)    |
| password          |
| createdAt         |
| updatedAt         |
+---------+---------+
          |
          | 1 : N
          |
+---------v---------+
|      WORKOUT      |
+-------------------+
| _id (PK)          |
| user (FK)         |
| workoutName       |
| category          |
| duration          |
| caloriesBurned    |
| workoutDate       |
| createdAt         |
| updatedAt         |
+-------------------+
```

One user can create many workout records. Each workout belongs to one authenticated user.
