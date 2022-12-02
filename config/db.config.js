const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://admin:f95wFN9mrdkNSsXP@cluster0.by9umw3.mongodb.net/assignment5",
    {
        useNewUrlParser: true
    }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to MongoDB database")
});

module.exports = db;
