require("dotenv").config();
const PORT = process.env.PORT ||5001;
const express = require("express");
const connectDB = require("./config/db");
const ProductRoutes = require("./routes/ProductRoutes");




 const app = express();
 
 app.use(express.json());

connectDB();

 app.use("/api/products", ProductRoutes);
 

 app.listen(PORT, () => console.log(`server running ${PORT}`))
 