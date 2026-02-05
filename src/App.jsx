import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* Header should be outside Routes but inside Router */}
          <Routes>
            {/* Home Page - No Header */}
            <Route path="/" element={<HomePage />} />
            
            {/* Products Page */}
            <Route path="/products" element={
              <>
                <Header />
                <ProductsPage />
              </>
            } />
            
            {/* Cart Page */}
            <Route path="/cart" element={
              <>
                <Header />
                <CartPage />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;