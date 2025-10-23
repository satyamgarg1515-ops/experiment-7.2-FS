import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 45 },
];

function Products() {
  const dispatch = useDispatch();

  return (
    <div className="product-grid">
      {products.map(p => (
        <div className="card" key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
