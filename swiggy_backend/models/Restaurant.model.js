import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    deliveryTime: { type: Number, required: true },
    imageURL: { type: String, required: true },
    cuisines: { type: String, required: true },
    rating: { type: Number, required: true },
    address: { type: String, required: true },
});

const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);

export default RestaurantModel;

// example data
// {
//     name: "The Great Indian Restaurant",
//     deliveryTime: 30,
//     imageURL: "https://example.com/image.jpg",
//     cuisines: ["Indian", "Chinese", "Italian"],
//     rating: 4.5,
//     address: "123 Main St, City, Country"
// }