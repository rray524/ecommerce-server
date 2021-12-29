const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://up_bihar_sotsongo:A84evSqopn4AHpej@cluster0.4jhnt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => console.log('DB Connected successfully'))
    .catch((err) => console.log(err))

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});