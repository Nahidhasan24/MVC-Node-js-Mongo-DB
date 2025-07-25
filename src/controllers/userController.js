const User = require("../models/userModel");

const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: "User created successfully", newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addUser,
    getUsers,
};
