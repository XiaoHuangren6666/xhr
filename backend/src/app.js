const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const financeRoutes = require('./routes/financeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database');
});

app.use('/api/users', userRoutes);
app.use('/api/finance', financeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});