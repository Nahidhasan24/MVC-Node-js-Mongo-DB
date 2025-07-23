# MVC-Node-js-Mongo-DB

A basic but modular Node.js REST API project using **Express.js**, **MongoDB**, and the **MVC** (Model-View-Controller) architecture pattern.

This project demonstrates a clean and scalable way to build backend APIs with Node.js and MongoDB, following best practices and modular code separation.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Configuration](#configuration)
- [Available API Routes](#available-api-routes)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About

This project uses the MVC design pattern to separate application logic into:

- **Models:** Mongoose schemas defining the data structure.
- **Views:** Not used here (API only) but can be added if templating is needed.
- **Controllers:** Handle business logic and interact with Models.
- **Routes:** Define REST API endpoints that call controllers.

The database connection is managed via Mongoose, and the app is structured to be extendable for future enhancements.

---

## Features

- RESTful API built with Express.js
- MongoDB integration using Mongoose ODM
- MVC folder structure for maintainability
- Environment-based configuration using `.env`
- Centralized error handling
- JSON request parsing middleware
- Easily extendable modular routes and controllers

---

## Tech Stack

- Node.js (v18+ recommended)
- Express.js
- MongoDB (Atlas or local)
- Mongoose ODM
- dotenv for environment variables
- Nodemon (for development)

---

## Project Structure

```plaintext
MVC-Node-js-Mongo-DB/
│
├── controllers/          # Controller logic for resources
│   └── UserController.js
├── models/               # Mongoose schemas
│   └── User.js
├── routes/               # Express route definitions
│   └── userRoutes.js
├── config/               # DB connection and config
│   └── db.js
├── middlewares/          # Custom middlewares (e.g. error handling)
│   └── errorHandler.js
├── app.js                # Main app entry point
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables (not committed)
└── README.md             # This file
