import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  removeFromCart, 
  incrementQuantity, 
  decrementQuantity 
} from './features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  
  const handleIncrement = () => {
    dispatch(incrementQuantity(item.id));
  };
  
  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item.id));
    }
  };
  
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };
  
  const itemTotal = item.price * item.quantity;
  
  return (
    <div className="cart-item">
      <img 
        src={item.image} 
        alt={item.name} 
        className="cart-item-image"
      />
      
      <div className="item-details">
        <h3>{item.name}</h3>
        <p className="unit-price">${item.price.toFixed(2)} each</p>
      </div>
      
      <div className="quantity-controls">
        <button 
          className="quantity-btn" 
          onClick={handleDecrement}
          disabled={item.quantity <= 1}
        >
          −
        </button>
        <span className="quantity">{item.quantity}</span>
        <button 
          className="quantity-btn" 
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      
      <div className="item-total">
        <strong>${itemTotal.toFixed(2)}</strong>
      </div>
      
      <button 
        className="delete-btn"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
};

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector(state => state.cart);
  
  const handleCheckout = () => {
    alert('Checkout functionality coming soon!');
  };
  
  if (items.length === 0) {
    return (
      <div className="cart-page">
        <Header />
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some plants to your cart!</p>
          <Link to="/products" className="continue-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="cart-page">
      <h1 className="page-title">Shopping Cart</h1>
      
      {/* Cart Summary */}
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total Items: {totalItems}</p>
        <p className="total-price">
          <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
        </p>
      </div>
      
      {/* Cart Items */}
      <div className="cart-items">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      
      {/* Cart Actions */}
      <div className="cart-actions">
        <Link to="/products" className="continue-btn">
          ← Continue Shopping
        </Link>
        
        <div>
          <button 
            className="checkout-btn"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>
            (Checkout functionality coming soon!)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;