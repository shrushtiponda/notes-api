# Notes API Backend

A secure and scalable Notes Management REST API built using Node.js, Express.js, MongoDB, and JWT Authentication.

This project includes:
- User Authentication
- JWT Authorization
- Protected Routes
- Notes CRUD Operations
- Ownership-Based Access Control
- Password Hashing using bcrypt
- Error Handling Middleware
- MongoDB Relations

---

# Live API

https://notes-api-g3cf.onrender.com/

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- Nodemon

---

# Features

## Authentication

- User Registration
- User Login
- Password Hashing
- JWT Token Generation
- Protected Routes

---

## Notes Features

- Create Note
- Get All Notes
- Get Single Note
- Update Note
- Delete Note

---

## Authorization Features

- Only authenticated users can access notes APIs
- Users can access only their own notes
- Users can update only their own notes
- Users can delete only their own notes

---

# Folder Structure

```bash
project-root/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── .env
├── server.js
├── package.json
```

---

# Installation

## Clone Repository

```bash
git clone <your-repository-url>
```

## Navigate to Project

```bash
cd notes-api
```

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in root directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# Run Project

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

---

# API Endpoints

## User Routes

### Register User

```http
POST /api/users/register
```

### Login User

```http
POST /api/users/login
```

---

## Notes Routes

### Create Note

```http
POST /api/notes
```

### Get All Notes

```http
GET /api/notes
```

### Get Single Note

```http
GET /api/notes/:id
```

### Update Note

```http
PUT /api/notes/:id
```

### Delete Note

```http
DELETE /api/notes/:id
```

---

# Authentication

Protected routes require JWT token.

Add token in headers:

```http
Authorization: Bearer your_token_here
```

---

# Note Schema

```js
{
  title: String,
  content: String,
  createdBy: ObjectId,
  updatedBy: ObjectId,
}
```

---

# Status Codes Used

| Status Code | Description |
|---|---|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

# Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes Middleware
- Ownership Validation

---

# Future Improvements

- Notes Search
- Pagination
- File Uploads
- Role-Based Access
- Refresh Tokens
- Docker Deployment
- AWS Deployment

---

# Author

Shrushti Ponda

Backend Developer | Node.js Enthusiast
