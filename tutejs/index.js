// npm install nodemon
// update package.json to "start": "nodemon index.js"

// Load packages and access services
const express = require("express");
const app = express();


// TELL THAT WE ARE USING EJS
// Setup view engine to ejs
app.set('view engine', 'ejs');

// Serve static content directly
app.use(express.static("css"));

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
});



// SETUP ROUTES
// STANDARD LOOKS TO VIEWS TO FIND INDEX USING .RENDER()
// Route to the welcome page
app.get('/', (request, response) => {
    response.render("index");
});


// Route to the services page
app.get('/services', (request, response) => {
  //Data
  const name = "Amy";
  response.render("services", {name: name});
});