const express = require('express');
const route = express.Router();
const sensor = require('../source/sensor_data.json');

route.get('/', async function (req, res, next) {
  res.json(sensor);
});

module.exports = route;
