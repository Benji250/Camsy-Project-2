import React from 'react'
import Shop from "./Shop"
import './App.css'
import Post from './Post'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Home from './Home'

const App = () => {
  return (
    <div className="App">

HELLO
      
<Routes>
      <Route exact element={<Home/>} path="/" />
      <Route element={<Post/>} path="post" />
      <Route element={<Shop/>} path="shop" />
    </Routes>
</div>    
    // <Routes>
    //   <Route path='/post' element={<Post/>}/>
    //   <Route path='/shop' element={<Shop/>}/>
    //   {/* <Route index element={
    //     <main>
    //       <Header/>
    //       <Post />
    //       <Shop />
    //     </main>
    //   } />
    //   <Route path={"/shop"} element={
    //     <main>
    //       <Header />
    //       <div>Shop page</div>
    //     </main>
    //   } /> */}
    // </Routes>
  );
}

export default App;
