import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function JewelryContainer({ products, addToCart }) {
  return (
    <div className="category-container">
      <h1>Jewelry</h1>
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

export default JewelryContainer;
