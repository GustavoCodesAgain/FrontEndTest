import React, { Component } from "react";
import ProductDetails from "./ProductDetails";

import "./Modal.css";

class Modal extends Component {
  render() {
    const { children, toogle, active } = this.props;

    return (
      <ProductDetails>
        {active && (
          <div className="modal">
            <div className="modalWindow">
              <div className="modalContent" >{children}</div>
              <a className="modals" onClick={toogle}>
                Close
              </a>
            </div>
            <div onClick={toogle} className="modal__background" />
          </div>
        )}
      </ProductDetails>
    );
  }
}

export default Modal;
