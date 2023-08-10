import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="./" className="logo">CAMSY</a>
        <nav>
          <a href="./shop.html">Shop</a>
          <a href="./register.html">Register</a>
          <a href="./checkout.html">Check out</a>
        </nav>
      </header>
      <div className='entry'>
       <img src={require('./CAMSY-LOGO.jpg')} alt="logo"/>
        <h3>You're tusted source for high end and affordable cameras</h3>
        <p>Weather you are looking for a high end camera or a certified used camra, we have what you are looking for.</p>
      </div>
    </main>
  );
}

export default App;
