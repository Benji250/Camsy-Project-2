require("donenv").confg();
const express = require("express");
const connectDB = require("./config/db");

connectDB();

 const app = express();

 const PORT = process.env.PORT ||3001;


 app.listen(PORT, () => console.log(`server running ${PORT}`))
 