import React, { useState, useEffect } from "react";
import MainContainer from "./components/MainContainer/MainContainer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    formInput: "",
  });

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const getProducts = await fetch("https://fakestoreapi.com/products");
      const jsonProducts = await getProducts.json();
      setProducts(jsonProducts);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <Navbar />
      <button className="view-cart-btn" onClick={toggleCart}>
        {showCart ? "Return" : "View Cart"}
      </button>

      {showCart ? (
        <Cart cart={cart} />
      ) : (
        <MainContainer products={products} addToCart={addToCart} />
      )}
    </div>
  );
}

export default App;
