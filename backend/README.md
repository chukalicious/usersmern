# Users Backend API Documentation

This document outlines the RESTful API endpoints provided by the Users backend.

Welcome to the Users backend API documentation. This API serves as a backend for managing user data, providing endpoints for user registration, profile management, and more.

## Introduction

This backend application is designed to handle user-related operations. It provides a RESTful API for registering new users, fetching user profiles, updating user information, and deleting user accounts.

### Connecting to Your NoSQL Database

To use this application with your own NoSQL database (e.g., MongoDB), follow these steps to establish a connection:

1. **Install MongoDB:**

   - If you haven't already, install MongoDB by following the instructions on the [official MongoDB documentation](https://docs.mongodb.com/manual/installation/).

2. **Create a MongoDB Cluster (Optional):**

   - If you prefer to use MongoDB Atlas (cloud-hosted MongoDB), sign up for an account and create a cluster. Obtain your MongoDB connection string.

3. **Configure Environment Variables:**

   - Create a `.env` file in the root directory of your project.
   - Define the MongoDB connection URI as an environment variable in the `.env` file. For example:
     ```plaintext
     MONGODB_URI=mongodb://localhost:27017/mydatabase
     ```

4. **Connect to MongoDB in Your Application:**

   - Use a library like Mongoose to connect to MongoDB in your Node.js application.
   - Here's an example of connecting to MongoDB using Mongoose:

     ```javascript
     const mongoose = require('mongoose');
     const dotenv = require('dotenv');

     dotenv.config();

     const { MONGODB_URI } = process.env;

     mongoose.connect(MONGODB_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });

     const db = mongoose.connection;

     db.on('error', console.error.bind(console, 'MongoDB connection error:'));
     db.once('open', () => {
       console.log('Connected to MongoDB database.');
     });
     ```

5. **Replace `MONGODB_URI`:**
   - Replace the `MONGODB_URI` value in your `.env` file with your MongoDB connection string obtained from MongoDB Atlas or your local MongoDB instance.

Now you're ready to use the Users backend API with your own MongoDB database!

## API Endpoints

The following endpoints are available for interacting with the Users backend API:

- `GET /`: Fetch all users
- `GET /profile/:id`: Fetch user by ID
- `POST /register`: Register a new user
- `PUT /profile/:id`: Update user profile
- `DELETE /profile/:id`: Delete user profile
- `POST /login`: Simulated login endpoint

Refer to the detailed API documentation below for more information on each endpoint.

---

**Note:** All responses from the API are in JSON format unless specified otherwise.

Base URL: `/api/users`

## Get All Users

- **Endpoint:** `GET /`
- **Description:** Fetches all users from the database.
- **Response:** Returns an array of user objects.

## Get User by ID

- **Endpoint:** `GET /profile/:id`
- **Description:** Retrieves a user by their unique ID.
- **Parameters:**
  - `id` (string): The ID of the user to retrieve.
- **Response:**
  - `200 OK`: Returns the user object if found.
  - `404 Not Found`: If no user with the specified ID exists.

## Register New User

- **Endpoint:** `POST /register`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

## Update User Profile

- **Endpoint:** `PUT /profile/:id`
- **Description:** Updates an existing user's profile.
- **Parameters:**
  - `id` (string): The ID of the user to update.
- **Request Body (Optional):**
  ```json
  {
    "email": "newemail@example.com",
    "password": "newpassword123"
  }
  ```

## Update User Profile

- **Response:**

  - `201 Created`: Returns the updated user object.
  - `404 Not Found`: If no user with the specified ID exists.

- **Endpoint:** `DELETE /profile/:id`
- **Description:** Deletes an existing user's profile.
- **Parameters:**
  - `id` (string): The ID of the user to delete.
- **Response:**
  - `200 OK`: Returns a success message upon deletion.
  - `404 Not Found`: If no user with the specified ID exists.

## Login (Dummy Endpoint)

- **Endpoint:** `POST /login`
- **Description:** Simulated endpoint for user login.
- **Response:**
  - `200 OK`: Always returns a success message.

**Note:** All responses are in JSON format unless otherwise specified.
