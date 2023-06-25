import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ElectronicsContainer({ products }) {
  return (
    <div>
      <h3>Electronics</h3>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ElectronicsContainer;
