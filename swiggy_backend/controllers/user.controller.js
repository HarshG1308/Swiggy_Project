import bcrypt from 'bcrypt';
import UserModel from '../models/User.model.js';
import jwt from 'jsonwebtoken';

export async function getAllUsers(req, res) {
    try {
        const users = await UserModel.find();
        res.status(200).send({ message: "All users fetched successfully", users });
    } catch (error) {
        res.status(500).send({ message: "Error fetching users", error });
    }
}

export async function getUserById(req, res) {
    const { id } = req.params;
    try {
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: `User with ID ${id} fetched successfully`, user });
    } catch (error) {
        res.status(500).send({ message: "Error fetching user", error });
    }
}

export async function register(req, res) {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send({ message: "User with this email already exists" });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await UserModel.create({ ...req.body, password: hashedPassword });
        res.status(201).send({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).send({ message: "Error creating user", error });
    }
}

export async function loginUser(req, res) {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).send({ message: "Invalid email or password" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ message: "Invalid email or password" });
        }
        let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).send({ message: "Login successful", user, token });
    } catch (error) {
        res.status(500).send({ message: "Error logging in", error });
    }
}

export async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: `User with ID ${id} deleted successfully` });
    } catch (error) {
        res.status(500).send({ message: "Error deleting user", error });
    }
}