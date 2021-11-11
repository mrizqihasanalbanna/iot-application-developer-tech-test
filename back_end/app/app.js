const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const salaryData = require('../routes/SalaryConversion');
const sensorData = require('../routes/dataSensor');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use('/api/salary', salaryData);
app.use('/api/sensor', sensorData);

module.exports = app;
