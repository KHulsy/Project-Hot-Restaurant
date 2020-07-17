// Get dependencies
const express = require("express");
const path = require("path");

// Set up express
const app = express();
const PORT = process.env.PORT || 3000;

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

// Routes

// Show home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Show make reservaiton page
app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

// Show view tables page
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

// Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

// Displays the waitlist
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

// Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});