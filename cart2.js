import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './cartSlice';

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name} (${item.price}) </span>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={e =>
              dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) }))
            }
          />
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
