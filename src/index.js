const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRouter);
app.use("/ping", (req, res) => {
  return res.json("Problem Service is live!");
});
app.listen(PORT, () => {
  console.log("Server is connected with port : ", PORT);
});
