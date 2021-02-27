require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models');

app.get('/', (req, res) => {
    db.color.findAll()
        .then((colors) => console.log(colors));
});

app.listen(5000, () => {
    console.log('connected');
});