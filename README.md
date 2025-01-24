# Student Management API

A simple and efficient RESTful API for managing student records, built with Node.js and Express. This project provides functionality to register, update, retrieve, and filter student data. This was a small project for the JavaScript course.

## Features
1. **Register Students:** Add students with details like name, gender, ID, address, subject, and grade.
2. **Retrieve Students:** Fetch all registered students.
3. **Search for a student by ID.**
4. **Filter students by subject.**
5. **Update Student Info:** Modify student details, including subjects and grades, with validation.
6. **Validation:** Ensure valid subjects are assigned and handle errors with meaningful responses.
7. **CORS Support:** Configured for cross-origin requests, making it easy to integrate with front-end applications.

## Endpoints
- **POST /students:** Register a new student.
- **GET /students:** Retrieve all students.
- **GET /students/:id:** Find a student by ID.
- **GET /students/subject/:subject:** Get students enrolled in a specific subject.
- **PUT /students/:name:** Update details of a student by name.

## Technology Stack
- **Backend:** Node.js with Express.js.
- **Data Storage:** In-memory storage using arrays (for prototyping and learning purposes).
- **Middleware:** JSON and URL-encoded payload handling with request size limits.
