import { useState, useEffect } from "react";

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
    <>
      <div>
        <h2>Hello</h2>
        <form onSubmit={null}>
          <input
            type="text"
            name="formInput"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            value={formData?.formInput}
          />
          <input type="submit" value="Submit" />
        </form>{" "}
      </div>
    </>
  );
}

export default App;
