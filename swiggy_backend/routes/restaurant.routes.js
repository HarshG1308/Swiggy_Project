import { getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant} from '../controllers/restaurant.controller.js';

function restaurantRoutes(app) {
  // Route to get all restaurants
  app.get('/restaurants', getAllRestaurants);

  // Route to get a specific restaurant by ID
  app.get('/restaurants/:id', getRestaurantById);

  // Route to create a new restaurant
  app.post('/restaurants', createRestaurant);

  // Route to update an existing restaurant
  app.put('/restaurants/:id', updateRestaurant);

  // Route to delete a restaurant
  app.delete('/restaurants/:id', deleteRestaurant);
}

export default restaurantRoutes;