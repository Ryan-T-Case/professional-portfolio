// ==========================================================================
// SERVER NPM PACKAGE DEPENDENCIES BELOW
// ==========================================================================

var express = require("express");

// ==========================================================================
// EXPRESS SERVER CONFIGURATION BELOW
// ==========================================================================

//Create the express server application
var app = express();

//Initial port setup
var PORT = process.env.PORT || 8080;

//Allow serving of static files in public folder
app.use(express.static("public"));
//Set up JSON data parsing for the express application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ==========================================================================
// ROUTER SETUP BELOW
// ==========================================================================

require("./routes/htmlRoutes")(app);

// ==========================================================================
// LISTENER SETUP BELOW
// ==========================================================================

//Waits for a port to start running the server on
app.listen(PORT, function() {
    console.log("Server listening on http://localhost:" + PORT);
});