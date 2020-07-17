// Get dependencies
var express = require("express");
var path = require("path");

// Set up express
var app = express();
var PORT = 3000;

// Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});