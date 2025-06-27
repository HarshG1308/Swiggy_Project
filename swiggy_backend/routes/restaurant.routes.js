import { getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant} from '../controllers/restaurant.controller.js';
import verifyToken from '../middlewares/verifyToken.js';

function restaurantRoutes(app) {
  // Route to get all restaurants
  app.get('/restaurants', verifyToken, getAllRestaurants);

  // Route to get a specific restaurant by ID
  app.get('/restaurants/:id', verifyToken, getRestaurantById);

  // Route to create a new restaurant
  app.post('/restaurants', verifyToken, createRestaurant);

  // Route to update an existing restaurant
  app.put('/restaurants/:id', verifyToken, updateRestaurant);

  // Route to delete a restaurant
  app.delete('/restaurants/:id', verifyToken, deleteRestaurant);
}

export default restaurantRoutes;