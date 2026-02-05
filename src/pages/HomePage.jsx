import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery, your premier destination for 
          beautiful houseplants. We bring nature indoors with our 
          carefully curated collection of tropical plants, succulents, 
          and flowering varieties.
        </p>
        <p>
          Start your plant journey today and transform your living 
          space into a green paradise!
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started →
        </Link>
      </div>
    </div>
  );
};

export default HomePage;