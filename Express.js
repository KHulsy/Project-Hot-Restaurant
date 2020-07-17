// Get dependencies
const express = require("express");
const path = require("path");

// Set up express
const app = express();
const PORT = 3000;

// Create arrays to store data
let tables = [
    {
        name: "Sierra",
        phone: "555-555-5555",
        email: "siechap@gmail.com",
        id: "me"
    }
]
let waitlist = [
    {
        name: "Sample",
        phone: "123-555-6789",
        email: "sample@sample.com",
        id: "sam"
    }
]

// Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});