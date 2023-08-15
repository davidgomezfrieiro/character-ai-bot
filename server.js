import express from 'express';
const app = express();
const port = 3000; // You can change this port number if needed

// Import the hello.js script
import { helloMsg } from './chat.js';

// Endpoint that triggers the script and returns "Hello World"
app.get('/', async (req, res) => {
  // Execute the script's function and get the message

  try {
    const message = await helloMsg();
    res.send(message);
  } catch (error) {
    // Handle errors appropriately
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
