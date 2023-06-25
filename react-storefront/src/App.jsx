import React, { useState, useEffect } from "react";
import MainContainer from "./components/MainContainer/MainContainer";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    formInput: "",
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const getProducts = await fetch("https://fakestoreapi.com/products");
      const jsonProducts = await getProducts.json();
      setProducts(jsonProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <MainContainer products={products} />
    </div>
  );
}

export default App;
