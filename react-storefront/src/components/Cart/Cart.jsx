// import React from "react";
// import ProductCard from "../ProductCard/ProductCard";

// function Cart({ cart }) {
//   return (
//     <div className="cart-container">
//       <h2 className="cart-title">Cart</h2>
//       <div className="cart-items">
//         {cart.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             showAddToCartButton={false}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cart;

import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function Cart({ cart }) {
  const uniqueProducts = Array.from(
    new Set(cart.map((product) => product.id))
  ).map((productId) => {
    return cart.find((product) => product.id === productId);
  });

  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <h1>Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          {uniqueProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} showAddToCartButton={false} />
              <p>
                Quantity: {cart.filter((item) => item.id === product.id).length}
              </p>
            </div>
          ))}
        </div>
        <div className="cart-text">
          <h2>Total Price:</h2>
          <p>${totalPrice.toFixed(2)}</p>
        </div>{" "}
      </div>
    </div>
  );
}

export default Cart;
