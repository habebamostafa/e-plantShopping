import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const cartItems = useSelector(state => state.cart.items);
  
  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  // Check if product is in cart
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div className="products-page">
      <h1 className="page-title">Our Plants Collection</h1>
      
      {/* Category Filters */}
      <div className="categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            isInCart={isInCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;