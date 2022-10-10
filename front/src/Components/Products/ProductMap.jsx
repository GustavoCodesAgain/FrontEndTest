import React from "react";
import Product from "./Product";

import "./Product.css";

const Products = ({ products, addToCart }) => {
  return (
    <div className="prodContainer">
      {products.map((prod) => (
        <Product
        prodPic={prod.image}
          addToCart={addToCart}
          key={prod._id}
          product={prod}
        />
      ))}
    </div>
  );
};

export default Products;
