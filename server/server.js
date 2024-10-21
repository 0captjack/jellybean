const express = require('express');  // Import Express
const bodyParser = require('body-parser');  // Import body-parser to handle JSON requests
const path = require('path');  // Import path module to handle and transform file paths
const app = express();  // Initialize the Express application
const port = 3000;  // Port where the server will listen

// Parse incoming JSON requests
app.use(bodyParser.json());
// Set path to '../client' directory
app.use(express.static(path.join(__dirname, '../client')));

let flavors = [];
let nextId = 1;  // Counter for flavor IDs

// POST endpoint
app.post('/flavors', (req, res) => {
  // Create flavor object with unique ID and name from request body
  const flavor = { id: nextId++, name: req.body.name };
  // Add to the flavors array
  flavors.push(flavor);
  // Respond with status 201 (Created) and return the new flavor object
  res.status(201).json(flavor);
});

// GET endpoint
app.get('/flavors', (req, res) => {
  // Send flavors array in the response
  res.json(flavors);
});

// PUT endpoint (update a flavor by ID)
app.put('/flavors/:id', (req, res) => {
  // Parse the ID
  const id = parseInt(req.params.id);
  // Find the flavor with the matching ID in flavors array
  const flavor = flavors.find(f => f.id === id);
  if (flavor) {
    // If found, update the flavor with the value from the request body
    flavor.name = req.body.name;
    // Send the updated flavor in the response
    res.json(flavor);
  } else {
    // If no flavor is found, respond with 404 (Not Found)
    res.status(404).send('Flavor not found');
  }
});

// DELETE endpoint (delete a flavor by ID)
app.delete('/flavors/:id', (req, res) => {
  // Parse the ID
  const id = parseInt(req.params.id);
  // Filter out the matching flavorID
  flavors = flavors.filter(f => f.id !== id);
  // Respond with status 204 (No Content)
  res.status(204).send();
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
