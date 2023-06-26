import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ElectronicsContainer({ products, addToCart }) {
  return (
    <div>
      <h3>Electronics</h3>
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

export default ElectronicsContainer;
