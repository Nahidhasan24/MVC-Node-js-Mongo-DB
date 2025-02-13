const express = require('express');
const mongoose = require('mongoose');

const connectDB = require("./src/config/db");
const userRoutes = require("./src/routes/userRoutes");
const ipLogger = require("./src/middleware/ipLogger");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(ipLogger);
app.use(express.json());

connectDB();

app.use('/api',ipLogger,userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));