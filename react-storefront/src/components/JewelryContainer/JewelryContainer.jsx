import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function JewelryContainer({ products }) {
  return (
    <div>
      <h3>Jewelry</h3>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default JewelryContainer;
