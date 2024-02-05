import React from 'react';

const CartPage = ({ cart, emptyCart, checkout }) => {
  
  const calculateTotalPrice = () => {
    
    return 0;
  };

  return (
    <div>
      <h1>Kundvagn</h1>
      {cart.length > 0 ? (
        <div>
        
          <ul>
            {cart.map((productId, index) => (
              <li key={index}></li>
            ))}
          </ul>
          <p>Totalt: {calculateTotalPrice()} kr</p>
          <button onClick={checkout}>Genomför köp</button>
          <button onClick={emptyCart}>Töm kundvagnen</button>
        </div>
      ) : (
        <p>Kundvagnen är tom</p>
      )}
    </div>
  );
};

export default CartPage;
