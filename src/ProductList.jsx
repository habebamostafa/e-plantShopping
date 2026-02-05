import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';  // Use correct import

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  // Sample products - AT LEAST 6 plants in 3+ categories
  const products = [
    // Tropical (2+ plants)
    { id: 1, name: "Monstera", price: 29.99, category: "tropical", image: "url1" },
    { id: 2, name: "Fiddle Leaf Fig", price: 39.99, category: "tropical", image: "url2" },
    
    // Succulents (2+ plants)
    { id: 3, name: "Echeveria", price: 12.99, category: "succulents", image: "url3" },
    { id: 4, name: "Aloe Vera", price: 15.99, category: "succulents", image: "url4" },
    
    // Flowering (2+ plants)
    { id: 5, name: "Orchid", price: 34.99, category: "flowering", image: "url5" },
    { id: 6, name: "Peace Lily", price: 24.99, category: "flowering", image: "url6" },
    
    // Add more for at least 6 per category if needed
  ];
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'tropical', 'succulents', 'flowering'];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);
  
  const isInCart = (id) => cartItems.some(item => item.id === id);
  
  return (
    <div className="product-list">
      <h1>Our Plants</h1>
      
      {/* Category filter buttons */}
      <div className="categories">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Products grid */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button
              onClick={() => dispatch(addItem(product))}
              disabled={isInCart(product.id)}
            >
              {isInCart(product.id) ? 'Added ✓' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;