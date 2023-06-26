import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function WomenClothingContainer({ products, addToCart }) {
  return (
    <div>
      <h3>Womens Clothing</h3>
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

export default WomenClothingContainer;
