import React from 'react'
import { Shop } from './pages/shop/shop';
import './App.css'
import { Routes, Route, BrowserRouter, } from 'react-router-dom'
import Home from './Home'
import CheckOut from './Checkout'
import { ShopContextProvider } from './context/shop-context';




const App = () => {
  return (
    <div className="App">


<BrowserRouter>
<ShopContextProvider>
 <Routes>
      <Route path="/" exact element={<Home/>}  ></Route>
      <Route path="checkout" element={<CheckOut/>}  ></Route>
      <Route path="shop" element={<Shop/>}  ></Route>
</Routes> 
</ShopContextProvider>
</BrowserRouter>
 </div>    
 
  );
}

export default App;
