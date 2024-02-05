
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';  
import ProductPage from './ProductPage';  
import CartPage from './CartPage'; 
import CheckoutPage from './CheckoutPage';  

function App() {
 
  const [cart, setCart] = useState([]);


  const addToCart = (productId) => {
    const updatedCart = [...cart, productId];
    setCart(updatedCart);
  };

  
  const emptyCart = () => {
    setCart([]);
  };

 
  const completePurchase = () => {
    
    emptyCart();
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          
          <Navbar cartItemCount={cart.length} />
        </header>
        <main>
         
          <Switch>
            <Route exact path="/">
              
              <ProductPage addToCart={addToCart} />
            </Route>
            <Route path="/cart">
              
              <CartPage cart={cart} emptyCart={emptyCart} checkout={completePurchase} />
            </Route>
            <Route path="/checkout">
              
              <CheckoutPage cart={cart} completePurchase={completePurchase} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

