const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!!!!!");
});

app.listen(port);

