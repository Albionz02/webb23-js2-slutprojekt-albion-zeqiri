import React, { useState } from 'react';

const ProductPage = () => {

  const products = [
    { id: 1, name: 'Produkt 1', image: 'product1.jpg', price: 10, stock: 5 },
    { id: 2, name: 'Produkt 2', image: 'product2.jpg', price: 20, stock: 3 },
   
  ];


  const [cart, setCart] = useState([]);

 
  const addToCart = (productId) => {
    const updatedCart = [...cart, productId];
    setCart(updatedCart);
  };


  return (
    <div>
      <h1>Produktsida</h1>
      <p>Kundvagn: {cart.length} produkter</p>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>Pris: {product.price} kr</p>
          <p>Lagersaldo: {product.stock}</p>
          {product.stock > 0 && <button onClick={() => addToCart(product.id)}>Lägg till i kundvagnen</button>}
        </div>
      ))}
    </div>
  );
};

export default ProductPage;

