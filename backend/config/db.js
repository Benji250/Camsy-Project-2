const dotenv = require('dotenv')
dotenv.config({path:'/.env'});
const mongoose = require("mongoose");
// const Product = require('./models/product');
// import products from './data/products';

const products = [
  {
    
      name: "Nikon D7500 DLSR",
      price: 1000,
      countInStock:10
      },
  
      {
      name: "Conaon PowerShot G7X",
      price: 700,
     countInStock:10
      },
  
      {
      name: "FufiFlim Instax Mini",
      price: 60,
      countInStock:10
      },
  
      {
      name: "Polaroid Now Instant Film Camera Bundle",
      price: 130,
      countInStock:10
      },
  
      {
      name: "Fujifilm X-S20",
      price: 1300,
      countInStock:10
      },
  
      {
      name: "Canon EOS Rebel T7",
      price: 500,
     countInStock:10
      },
  
      {
      name: "Panasonic Lumix G7",
      price: 600,
      countInStock:10
      },
  
      {
      name: "Nikon Z FC 4K price",
      price: 1000,
      countInStock:10
      },
  
      {
      name: "Canon EOS R5 price",
      price: 3600,
      countInStock:10
      },
  
      
      {
      name: "Fujifilm X-T5",
      price: 2000,
      countInStock:10
      }
  ];

const connectDB = async () => {
  console.log(process.env.MONGO_URI)
    try {
      await mongoose.connect('mongodb+srv://123:123@group-project-2.4nbv3gb.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log("MongoDB connection SUCCESS");
    } catch (error) {
      console.error("MongoDB connection FAIL");
      console.error(error)
      process.exit(1);
    }
  };
  // const seedDB = async () => {
  //   await Product.deleteMany({})
  //   await Product.insertMany(products)
  // }

  // seedDB().then(() => {
  //   mongoose.connection.close();
  // });
  module.exports = connectDB;