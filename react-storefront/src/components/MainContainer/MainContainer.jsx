import React from "react";
import MenClothingContainer from "../MenClothingContainer/MenClothingContainer";
import WomenClothingContainer from "../WomenClothingContainer/WomenClothingContainer";
import ElectronicsContainer from "../ElectronicsContainer/ElectronicsContainer";
import JewelryContainer from "../JewelryContainer/JewelryContainer";

function MainContainer({ products, addToCart }) {
  return (
    <div className="main-container">
      <MenClothingContainer
        products={products.filter((p) => p.category === "men's clothing")}
        addToCart={addToCart}
        id="men-clothing"
      />
      <WomenClothingContainer
        products={products.filter((p) => p.category === "women's clothing")}
        addToCart={addToCart}
        id="women-clothing"
      />
      <JewelryContainer
        products={products.filter((p) => p.category === "jewelery")}
        addToCart={addToCart}
        id="jewelry"
      />
      <ElectronicsContainer
        products={products.filter((p) => p.category === "electronics")}
        addToCart={addToCart}
        id="electronics"
      />
    </div>
  );
}

export default MainContainer;
