const express = require("express");
const mongoose = require("mongoose");
const server = express();

mongoose.connect('mongodb://localhost:27017/TrabalhoWeb2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
server.use(express.json());

const routes = require("./routes");

server.use(routes);

server.listen(3334);
