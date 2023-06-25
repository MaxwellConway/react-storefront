// ProductCard.jsx
import React from "react";

function ProductCard({ product }) {
  return (
    <div>
      <h4>{product.title}</h4>
      <p>Price: {product.price}</p>
      <img src={product.image} alt="" />
      {/* Display other product details */}
    </div>
  );
}

export default ProductCard;
