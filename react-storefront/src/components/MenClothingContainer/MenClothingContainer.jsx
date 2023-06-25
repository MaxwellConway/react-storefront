// MenClothingContainer.jsx
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function MenClothingContainer({ products }) {
  return (
    <div>
      <h3>Mens Clothing</h3>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default MenClothingContainer;
