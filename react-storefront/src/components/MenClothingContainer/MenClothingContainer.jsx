import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function MenClothingContainer({ products, addToCart }) {
  return (
    <div className="category-container">
      <h1>Mens Clothing</h1>
      <div className="products-container">
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

export default MenClothingContainer;
