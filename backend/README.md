# Users Backend API Documentation

This document outlines the RESTful API endpoints provided by the Users backend.

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
