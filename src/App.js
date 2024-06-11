import React from "react"
import logo from './apple.jpg';
import './App.css';
import InventoryList from "./InventoryList"
function App() {
  
  return (
    <div className="App">
      <header className="logo">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>Organic Grocery Store</h1> 

      </header>

      <main>
        <h1>Inventory</h1>
        <p className="discount-message"> <span className="discount-percentage">20% Discount</span>  applied to produce with stock quantity of 100 or more</p>
        <InventoryList/>
      </main>

      <footer>
        <p>&copy; 2024 Organic Grocery Store</p>
        <div className="footer-link">
          <a href="/#" className="menus">About Us</a>
          <p> | </p>
          <a href="/##" className="menus">Contact</a>
          <p> | </p>
          <a href="/###" className="menus">Privacy Policy</a>
        </div>
      </footer>

    </div>
  );
}

export default App;
