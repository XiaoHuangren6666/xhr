const express = require('express');
const FinanceController = require('../controllers/financeController');

const setFinanceRoutes = (app) => {
    const router = express.Router();
    const financeController = new FinanceController();

    router.post('/finance', financeController.addFinanceRecord);
    router.get('/finance/:date', financeController.getFinanceRecordsByDate);

    app.use('/api', router);
};

module.exports = setFinanceRoutes;