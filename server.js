/* MODULES */
require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models');

/* MIDDLEWARE */
// Logger
app.use(require('morgan')('dev'));
// JSON parser
app.use(express.json({ type: 'application/json' }));

/* ROUTES */
app.get('/v1/api/colors', (req, res) => {
    db.color.findAll()
        .then((colors) => res.send({ colors: colors }));
});

/* APP CONNECTION */
app.listen(5000, () => {
    console.log('connected');
});