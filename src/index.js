const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/eventHandler.js");
const connectToDB = require("./config/db.config.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.use("/ping", (req, res) => {
  return res.json("Problem Service is live!");
});

// last middlewear if error comes
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log("Server is connected with port : ", PORT);

  await connectToDB();

  console.log(`connected to database successfully!`);

  
});
