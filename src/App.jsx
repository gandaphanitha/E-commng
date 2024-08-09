


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./pages/ProductDetails";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Cart from "./components/Cart";
import ProductCards from "./components/ProductCards";

function App() {
  const [cart, setCart] = useState([]);
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.title} added to cart!`);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Item removed from cart.");
  };

  const handleSignInClose = () => {
    setShowSignIn(false);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      {showSignIn && <SignIn onClose={handleSignInClose} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/signIn" element={<SignIn onClose={handleSignInClose} />} />
        <Route path="/product/:id" element={<ProductDetails handleAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} handleRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/category/:category" element={<ProductCards />} /> {/* Route for categories */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
