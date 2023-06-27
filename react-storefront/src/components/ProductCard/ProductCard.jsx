import React, { useState } from "react";

function ProductCard({ product, addToCart, showAddToCartButton }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={`product-card ${expanded ? "expanded" : ""}`}>
      <div className="clickable" onClick={toggleExpanded}>
        <img src={product.image} alt={product.title} />
        <h4>{product.title}</h4>
        <p>Price: {product.price}</p>
      </div>
      {expanded && (
        <>
          <p>Description: {product.description}</p>
          {showAddToCartButton && (
            <button onClick={handleAddToCart}>Add to Cart</button>
          )}
        </>
      )}
    </div>
  );
}

export default ProductCard;
