const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, './views')));

app.get('/salary-conversion', async (req, res, next) => {
  res.render(__dirname + '/views/Salary_Conversion');
});

app.get('/sensor-aggregation', async (req, res, next) => {
  res.render(__dirname + '/views/SensorAggregation');
});

app.get('/sensor-aggregation-simulation', async (req, res, next) => {
  res.render(__dirname + '/views/SensorAggregationSimulation');
});

module.exports = app;
