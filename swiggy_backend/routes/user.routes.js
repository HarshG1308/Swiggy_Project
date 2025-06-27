// Import necessary controllers
import { getAllUsers, getUserById, register, loginUser, deleteUser } from '../controllers/user.controller.js';

export default function userRoutes(app) {
  // Route to get all users
  app.get('/users', getAllUsers);

  // Route to get a specific user by ID
  app.get('/users/:id', getUserById);

  // Route to create a new user
  app.post('/register', register);

  // Route to update an existing user
  app.post('/login', loginUser);

  // Route to delete a user
  app.delete('/users/:id', deleteUser);
}