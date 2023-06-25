import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function WomenClothingContainer({ products }) {
  return (
    <div>
      <h3>Womens Clothing</h3>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default WomenClothingContainer;
