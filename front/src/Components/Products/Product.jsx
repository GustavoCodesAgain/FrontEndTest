import React, { useState } from "react";

import Modal from "../ProductDetails/Modal";
import ReactStars from "react-rating-stars-component";
import "./Product.css";

function Product({ prodPic, product, addToCart }) {
  const [active, setActive] = useState(false);
  const toogle = () => {
    setActive(!active);
  };

  return (
    <div className="cntProd">
      <img className="product" src={`http://localhost:5000/${prodPic}`} alt={product.name} />
      <h2 className="prodName">{product.name}</h2>

      <div className="btnCont">
        <a
        
          style={{
            visibility: product.countInStock === 0 ? "hidden" : "visible",
          }}
          className="cta"
          onClick={() => addToCart(product)}
        >
          Add item to cart
        </a>
        {product.countInStock === 0 ? (
        <h3 style={{ color: "#9a031e" }}>Unaivalaible</h3>
      ) : (
        ""
      )}
        <a className="cta cta-detail" onClick={() => toogle()}>
          Product Details
        </a>
      </div>
      <Modal active={active} toogle={toogle}>
        <div className="prodModal">
          <img className="product" src={`http://localhost:5000/${prodPic}`} alt={product.name} />
          <div className="prodName">
            <h2>Brand</h2>
            {product.brand}
          </div>
          <p className="description">{product.description}</p>
          <div className="description">
            <h2>Category</h2> {product.category}
          </div>
          <div className="description">
            {" "}
            <h2>Price</h2>$ {product.price}
          </div>
          <div className="description">
            <ReactStars
              count={product.rating}
              size={30}
              edit= {false}
              color = "#ff4800"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Product;
