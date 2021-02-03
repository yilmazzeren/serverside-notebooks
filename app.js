const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", routes);

const notebooksRouter = require("./routes/notebooks");
app.use("/api/notebooks", notebooksRouter);

module.exports = app;
