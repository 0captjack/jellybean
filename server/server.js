const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client'))); // Adjusted path

let flavors = [];
let nextId = 1;

// Add a new flavor
app.post('/flavors', (req, res) => {
  const flavor = { id: nextId++, name: req.body.name };
  flavors.push(flavor);
  res.status(201).json(flavor);
});

// View all flavors
app.get('/flavors', (req, res) => {
  res.json(flavors);
});

// Update a flavor
app.put('/flavors/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const flavor = flavors.find(f => f.id === id);
  if (flavor) {
    flavor.name = req.body.name;
    res.json(flavor);
  } else {
    res.status(404).send('Flavor not found');
  }
});

// Delete a flavor
app.delete('/flavors/:id', (req, res) => {
  const id = parseInt(req.params.id);
  flavors = flavors.filter(f => f.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});