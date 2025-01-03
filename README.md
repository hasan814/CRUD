# CRUD

# User Management System

This is a full-stack **User Management System** built with **React.js** on the frontend and **Node.js** with **Express.js** on the backend. It includes user authentication (using JWT) and CRUD operations for managing users. The project supports role-based access control, where admins can manage all users, and regular users can edit their own profile.

---

## Features

### Frontend

- Built with **React.js** and styled using **Tailwind CSS**.
- **Role-based Navigation**:
  - Admins can view and manage all users (edit and delete).
  - Regular users can only edit their profile.
- **Authentication**:
  - Users can register, log in, and log out.
  - JWT-based session management.
- Responsive and user-friendly design.

### Backend

- Built with **Node.js** and **Express.js**.
- **MongoDB** for database management.
- Implements **JWT Authentication**.
- RESTful APIs for user management:
  - Create, Read, Update, and Delete (CRUD) operations.

---

## Technologies Used

### Frontend

- **React.js**
- **React Router**
- **React Hot Toast**
- **Axios**
- **Tailwind CSS**

### Backend

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **bcryptjs** for password hashing

---

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your system.
- MongoDB connection (local or cloud, e.g., MongoDB Atlas).

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/user-management-system.git
cd user-management-system
```

### 2. Setup Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and configure it:
   ```env
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### 3. Setup Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend` directory and configure it:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```
4. Start the frontend development server:
   ```bash
   npm start
   ```

---

## API Endpoints

### Authentication

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Login and get a JWT token.

### User Management

- `GET /api/users/`: Get a list of all users (admin only).
- `PUT /api/users/:id`: Update user information.
- `DELETE /api/users/:id`: Delete a user (admin only).

---

## Folder Structure

### Backend

```
backend/
├── config/
│   └── db.js          # Database connection setup
├── controllers/
│   └── userController.js  # API logic
├── middlewares/
│   └── authMiddleware.js  # Authentication middleware
├── models/
│   └── userModel.js    # User schema
├── routes/
│   └── userRoutes.js   # User routes
└── server.js           # Main server file
```

### Frontend

```
frontend/
├── public/             # Static files
├── src/
│   ├── components/
│   │   └── AuthForm.jsx    # Shared authentication form
│   ├── modules/
│   │   ├── EditUserForm.jsx # User editing form
│   │   ├── UserList.jsx     # Admin user list
│   ├── pages/
│   │   ├── RegisterPage.jsx # Registration page
│   │   ├── LoginPage.jsx    # Login page
│   │   ├── AdminPage.jsx    # Admin dashboard
│   │   └── UserPage.jsx     # User profile page
│   ├── App.jsx           # Main application file
│   ├── api.js            # Axios API setup
└── package.json          # Frontend dependencies
```

---

## Usage

1. Start the backend server.
2. Start the frontend development server.
3. Open `http://localhost:3000` in your browser to access the application.

---

## Screenshots

### Register Page

### Login Page

### Admin Dashboard

---

## Future Enhancements

- Add pagination for the user list.
- Implement forgot password functionality.
- Add unit and integration tests.
- Enhance UI with animations.

---

## License

This project is licensed under the MIT License.

hasan
