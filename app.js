const mongoose = require('mongoose');

// Replace <YOUR_CONNECTION_STRING> with your MongoDB Atlas connection string
const connectionString = 'mongodb+srv://lovebabbar3:rr8opKHOeCmHdChN@cluster0.c0k4xvu.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error.message);
  });



const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello, this is my Node.js app!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
