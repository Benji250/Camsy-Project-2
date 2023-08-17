import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Routes, Route, } from 'react-router-dom'
import Home from './home'




export const Shop = () =>{
    return  (
        <div className="shop">
          <Routes>
      <Route path="/" exact element={<Home/>}  ></Route>
      
      <Route path="shop" element={<Shop/>}  ></Route>
</Routes> 
            <div className="shopTittle">
                <h1>CAMSY</h1>
            </div>
            <div className="products">
              {""}
              {PRODUCTS.map((product) => (
                <Product data={product}/>
              ))}
            </div>
        </div>
    )
}