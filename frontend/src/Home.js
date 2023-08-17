import React from "react";
import { Link } from "react-router-dom";

// Router
export default function Home () {
  return(
    <main>
      <img src={require('./CAMSY-LOGO.jpg')} alt="logo"/>
    <header>
      <a href="./" className="logo">CAMSY</a>
      
      <nav>
      <Link to="/shop">Shop</Link>
      <Link to="/checkout">Check out</Link>
      </nav>
    </header>
    <div className='entry'>
     {/* <img src={require('./CAMSY-LOGO.jpg')} alt="logo"/> */}
      <h3>You're tusted source for high end and affordable cameras</h3>
      <p>Weather you are looking for a high end camera or a certified used camra, we have what you are looking for.</p>
    </div>

    <section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide1">
      <div class="carousel__snapper">
        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide2">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide3">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide2"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide4">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide3"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         class="carousel__next">Go to first slide</a>
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside>
</section>
   
    <img src={require('./images/Home/camera.jpeg')} alt="cover"/>
    <img src={require('./images/Home/594C8AE7-7D3F-4161-B226-DE06D7B7A653.jpg')} alt="cover2"/>
  </main>
  )

}
