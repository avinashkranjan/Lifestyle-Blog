const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");
const app = express();
const PORT = 5000;

//Connextion to MongoDB
mongoose.connect(MONGOURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connnected To MongoDB");
});

mongoose.connection.on("error", (error) => {
  console.log("Error: " + error);
});

//models import
require("./models/post");
require("./models/category");

app.use(express.json());

//Routes

app.use(require("./routes/post"));
app.use(require("./routes/category"));

app.listen(PORT, () => {
  console.log("server is started at " + PORT);
});
