/* LIBRARIES and MODULES */
require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

/* APP CONNECTION */
const port = process.env.PORT || 5000;
const app = express();
app.listen(port, () => {
    console.log(`connected on port ${port}...`);
});

/* MIDDLEWARE */
app.use(require('morgan')('dev')); // Logger
app.use(express.json({ type: 'application/json' })); // JSON Parser
app.use(cors());

/* ROUTES */
app.use('/api/v1/colors', routes.colors);