import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function JewelryContainer({ products, addToCart }) {
  return (
    <div>
      <h3>Jewlery</h3>
      <div className="category-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            showAddToCartButton={true}
          />
        ))}
      </div>
    </div>
  );
}

export default JewelryContainer;
