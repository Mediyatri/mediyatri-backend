const express = require('express');
const router = express.Router();
const hospitalsData = require('../data/hospitals.json');

// Route to get all cities
router.get('/cities', (req, res) => {
  const cities = Object.keys(hospitalsData);
  res.json(cities);
});

// Route to get hospitals data for a specific city
router.get('/hospitals/:city', (req, res) => {
  const city = req.params.city;
  if (hospitalsData.hasOwnProperty(city)) {
    res.json(hospitalsData[city]);
  } else {
    res.status(404).json({ error: 'City not found' });
  }
});

module.exports = router;
