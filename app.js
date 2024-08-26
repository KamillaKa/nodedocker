// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL (/)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
