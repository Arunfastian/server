const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();
app.use(bodyparser.json());
app.use(cors());

const Port = process.env.PORT || 3001;
const URL = process.env.DB_URL;

app.use("/User", require("./routes/routes.js"));
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
);
   
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(Port, () => {
  console.log(`Listening On ${Port}`);
});
