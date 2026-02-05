import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice';  // Use correct imports

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector(state => state.cart);
  
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    } else {
      dispatch(removeItem(id));
    }
  };
  
  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart is Empty</h2>
        <Link to="/products">Continue Shopping</Link>
      </div>
    );
  }
  
  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      
      {/* Total cart amount */}
      <div className="cart-summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      
      {/* Cart items */}
      {items.map(item => {
        const itemTotal = item.price * item.quantity;
        
        return (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price.toFixed(2)}</p>
              <p>Total: ${itemTotal.toFixed(2)}</p>
            </div>
            
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          </div>
        );
      })}
      
      <div className="cart-actions">
        <Link to="/products" className="continue-btn">
          Continue Shopping
        </Link>
        <button className="checkout-btn" onClick={() => alert('Coming Soon!')}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;