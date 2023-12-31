import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Link } from "react-router-dom";

export const Shop = () => {
  return (
    <div className="shop">

      <div className="shopTittle">
        <h1>CAMSY</h1>
        <header>
          <a href="./" className="logo">CAMSY</a>

          <nav>

            <Link to="/cart">Cart</Link>
          </nav>
        </header>
      </div>
      <div className="products">
        {""}
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}