import React from "react";

import "./Menu.css";

function Menu({ productsInCart, showProductsInCart }) {

  const qty = productsInCart.reduce((acc, el) => acc + el.qty, 0);
  const getNumber = (number) => {
    if(!number){
        return ''
    }else {
        return number > 9 ? '9+' : number;
    }
}

function ItemsInCart({prodQty}) {
    return (
        <div className="itemsCart" >
           Items({getNumber(prodQty)})
        </div>
    );
}
  return (
    <nav className="nav">
      <div className="navItems">
        <img className="navLogo" src="./images/logo.svg" alt="Logo"/>
        <p className="navTitle">Prueba</p>
      </div>
      <div className="navCart">
      <img
          className="menuItem menuItem--cart" alt="Shopping Cart Logo"
          src="./images/carticon.png" onClick={showProductsInCart}
        ></img>
        {qty !== 0 && !isNaN(qty) ? (
          <ItemsInCart prodQty={qty} />
        ) : null}
        
      </div>
        
    </nav>
  );
}

export default Menu;
