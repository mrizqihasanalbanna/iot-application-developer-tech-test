const express = require('express');
const route = express.Router();
const salary = require('../source/salary_data.json');

route.get('/', async function (req, res, next) {
  res.json(salary);
});

module.exports = route;
