const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");
const mongoose = require("mongoose");

async function connectToDB() {
  try {
    if (NODE_ENV == "development") await mongoose.connect(ATLAS_DB_URL);
    else if (NODE_ENV == "production")
      await mongoose.connect("Something else!");
  } catch (error) {
    console.log(`Unable to connect to DB`)
    console.log(error);
  }
}

module.exports = connectToDB;
