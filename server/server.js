require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000"
}))

app.use("/api", routes);

mongoose.connect(process.env.dbUri).then(() => {
  console.log("connected to database");

  app.listen(4000, () => {
    console.log("App is listining to port 4000");
  });
});
