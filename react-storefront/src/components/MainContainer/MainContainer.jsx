import React from "react";
import MenClothingContainer from "../MenClothingContainer/MenClothingContainer";
import WomenClothingContainer from "../WomenClothingContainer/WomenClothingContainer";
import ElectronicsContainer from "../ElectronicsContainer/ElectronicsContainer";
import JewelryContainer from "../JewelryContainer/JewelryContainer";

function MainContainer({ products }) {
  return (
    <div>
      <MenClothingContainer
        products={products.filter((p) => p.category === "men's clothing")}
      />
      <WomenClothingContainer
        products={products.filter((p) => p.category === "women's clothing")}
      />
      <JewelryContainer
        products={products.filter((p) => p.category === "jewelery")}
      />
      <ElectronicsContainer
        products={products.filter((p) => p.category === "electronics")}
      />
    </div>
  );
}

export default MainContainer;
