const express = require('express');
const UserController = require('../controllers/userController');

const setUserRoutes = (app) => {
    const router = express.Router();
    const userController = new UserController();

    router.post('/register', userController.registerUser);
    router.post('/login', userController.loginUser);

    app.use('/api/users', router);
};

module.exports = setUserRoutes;