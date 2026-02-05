import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product, isInCart }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart ✓' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;