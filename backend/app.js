const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});

app.use(express.static(path.join(__dirname, "../fintech/build")));

app.get("/user", (req, res) => {
    res.status(201).send({ message: "Connected to user!" });
});

console.log("path", path.join(__dirname, "../../fintech/build/index.html"))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../fintech/build/index.html"));
});