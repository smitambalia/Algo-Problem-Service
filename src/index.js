const express = require("express");

const app = express();


const { PORT } = require("./config/server.config")


app.listen(PORT, ()=> {
    console.log("Server is connected with port : ", PORT)
})