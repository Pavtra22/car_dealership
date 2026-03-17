const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3030;

app.use(cors());
app.use(express.json());

const data = JSON.parse(fs.readFileSync('sample_data/dealerships.json', 'utf8'));

// Task 9: Get all dealers
app.get('/fetchDealers', (req, res) => {
  res.json(data.dealerships);
});

// Task 11: Get dealers by state
app.get('/fetchDealers/:state', (req, res) => {
  const state = req.params.state;
  const result = data.dealerships.filter(d => d.state === state);
  res.json(result);
});

// Task 10: Get dealer by ID
app.get('/fetchDealer/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = data.dealerships.find(d => d.id === id);
  res.json(result);
});

// Task 8: Fetch reviews for a dealer
app.get('/fetchReviews/dealer/:id', (req, res) => {
  // Logic to fetch from a separate reviews.json or MongoDB
  res.json([{ id: 1, name: "Sample User", review: "Great service!", sentiment: "positive" }]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});