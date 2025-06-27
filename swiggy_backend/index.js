import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import restaurantRoutes from './routes/restaurant.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();


const app = express();

app.use(express.json()); 

mongoose.connect(process.env.DB_URI).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

app.get('/api', (req, res) => {
    res.send("Hello World from Swiggy Backend!");
})

restaurantRoutes(app);
userRoutes(app);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});