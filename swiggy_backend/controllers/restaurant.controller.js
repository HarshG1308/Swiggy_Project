import RestaurantModel from "../models/Restaurant.model.js";

export async function createRestaurant(req, res) {
    try {
        const newRestaurant = await RestaurantModel.create(req.body);
        res.status(201).send({ message: "Restaurant created successfully", restaurant: newRestaurant });
    } catch (error) {
        res.status(500).send({ message: "Error creating restaurant", error });
    }
}

export async function getAllRestaurants(req, res) {
    try {
        const restaurants = await RestaurantModel.find();
        res.status(200).send({ message: "All restaurants fetched successfully", restaurants });
    } catch (error) {
        res.status(500).send({ message: "Error fetching restaurants", error });
    }
}

export async function getRestaurantById(req, res) {
    const { id } = req.params;
    try {
        const restaurant = await RestaurantModel.findById(id);
        if (!restaurant) {
            return res.status(404).send({ message: "Restaurant not found" });
        }
        res.status(200).send({ message: `Restaurant with ID ${id} fetched successfully`, restaurant });
    } catch (error) {
        res.status(500).send({ message: "Error fetching restaurant", error });
    }
}

export async function updateRestaurant(req, res) {
    const { id } = req.params;
    try {
        const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRestaurant) {
            return res.status(404).send({ message: "Restaurant not found" });
        }
        res.status(200).send({ message: `Restaurant with ID ${id} updated successfully`, restaurant: updatedRestaurant });
    } catch (error) {
        res.status(500).send({ message: "Error updating restaurant", error });
    }
}

export async function deleteRestaurant(req, res) {
    const { id } = req.params;
    try {
        const deletedRestaurant = await RestaurantModel.findByIdAndDelete(id);
        if (!deletedRestaurant) {
            return res.status(404).send({ message: "Restaurant not found" });
        }
        res.status(200).send({ message: `Restaurant with ID ${id} deleted successfully` });
    } catch (error) {
        res.status(500).send({ message: "Error deleting restaurant", error: error.message });
    }
}

