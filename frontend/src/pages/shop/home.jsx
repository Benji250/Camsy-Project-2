import React from "react";
import { Link } from "react-router-dom";

// Router
export default function Home () {
  return(
    <main>
    <header>
      <a href="./" className="logo">CAMSY</a>
      <nav>
        <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/checkout">Check out</Link>
      </nav>
    </header>
    <div className='entry'>
      <h3>You're tusted source for high end and affordable cameras</h3>
      <p>Weather you are looking for a high end camera or a certified used camra, we have what you are looking for.</p>
    </div>
  </main>
  )

}