const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
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

app.use((req, res, next) => {
    console.log("req", req.headers)
    next()
})
// route


app.get("/user", (req, res) => {
    res.status(201).send({message: "Connected to user!"});
});