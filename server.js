/* MODULES */
require('dotenv').config();
const express = require('express');
const db = require('./models');
const cors = require('cors');

/* APP CONNECTION */
const app = express();
app.listen(5000, () => {
    console.log('connected');
});

/* MIDDLEWARE */
app.use(require('morgan')('dev')); // Logger
app.use(express.json({ type: 'application/json' })); // JSON Parser
const corsOptions = {
    origin: 'http://localhost:3000', // Change to client-side address
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

/* ROUTES */
app.get('/v1/api/colors', (req, res) => {
    db.color.findAll().status(200)
        .then((colors) => res.send({ colors: colors }));
});

app.get('/v1/api/colors/:id', (req, res) => {
    db.color.findOne({
        where: {
            id: req.params.id,
        },
    }).then((colors) => res.send({ colors: colors }));
});