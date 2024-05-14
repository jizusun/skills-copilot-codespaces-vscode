// Create web server 
// Create a new web server
const express = require('express');
const app = express();

// Import the comments data
const comments = {
  "1": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",  
    "comment": "This is a comment"
  },
};

// Create a route
app.get('/comments', (req, res) => {
  res.json(comments)
});
