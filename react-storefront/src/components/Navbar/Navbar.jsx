import React from "react";

function Navbar() {
  const scrollToCategory = (category) => {
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div onClick={() => scrollToCategory("men-clothing")}>
          Mens Clothing
        </div>
        <div onClick={() => scrollToCategory("women-clothing")}>
          Womens Clothing
        </div>
        <div onClick={() => scrollToCategory("jewelry")}>Jewelry</div>
        <div onClick={() => scrollToCategory("electronics")}>Electronics</div>
      </div>
    </nav>
  );
}

export default Navbar;
