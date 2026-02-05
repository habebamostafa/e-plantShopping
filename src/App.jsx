import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import './App.css';

// Landing Page Component INLINE in App.jsx
const LandingPage = () => {
  return (
    <div className="background-image">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>Your premier destination for beautiful houseplants</p>
        <a href="/#/products" className="get-started-btn">
          Get Started →
        </a>
      </div>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;