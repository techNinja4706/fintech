const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// middleware
const corsOptions = {
    origin: "https://fintech-react.onrender.com/"
}
app.use(express.json());
app.use(cors());
// connect MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});

app.use(express.static(path.join(__dirname, "../fintech/public")));
// app.use((req, res, next) => {
//     console.log("req", req.headers)
//     next()
// })
// route


app.get("/user", (req, res) => {
    res.status(201).send({ message: "Connected to user!" });
});

console.log("path", path.join(__dirname, "../../fintech/build", "index.html"))

app.get("*", (req, res) => {
    console.log(__dirname)
    console.log(__dirname, '../')
    console.log(__dirname, '../../')
    console.log(path.join(__dirname, "../fintech//build/robots.txt"))
    res.sendFile(path.join(__dirname, "../fintech/public/index.html"));
});