import React from 'react'
import Shop from "./Shop"
import './App.css'
import { Routes, Route, BrowserRouter, } from 'react-router-dom'
import Home from './Home'
import CheckOut from './Checkout'




const App = () => {
  return (
    <div className="App">


<BrowserRouter>
 <Routes>
      <Route path="/" exact element={<Home/>}  ></Route>
      <Route path="checkout" element={<CheckOut/>}  ></Route>
      <Route path="shop" element={<Shop/>}  ></Route>
</Routes> 
</BrowserRouter>
 </div>    
 
  );
}

export default App;
