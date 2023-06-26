import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function Cart({ cart }) {
  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      <div className="cart-items">
        {cart.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showAddToCartButton={false}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
