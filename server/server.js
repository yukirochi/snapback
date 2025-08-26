const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/routes")
const cors = require("cors")
const app = express();

app.use(express.json());

app.use("/api", routes)

app.listen(4000, ()=> {
    console.log("App is listining to port 4000");
})