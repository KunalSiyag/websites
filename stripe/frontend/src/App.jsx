import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Success from './success';
import Cancel from './cancel';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Router>
      <div className="p-5">
        <nav className="flex justify-between mb-5">
          <h1 className="text-3xl font-bold">Shop</h1>
          <Link to="/cart">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Cart ({cart.length})
            </button>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
