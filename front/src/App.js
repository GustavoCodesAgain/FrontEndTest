import React, { useEffect, useState } from 'react'
import "./App.css";
import Bar from "./Components/Bar/bar";
import Layout from "./Components/Layout/Layout";
import Products from "./Components/Products/ProductMap";
import Menu from "./Components/Menu/Menu";
import Search from "./Components/Search/Search";
import axios from "axios";
import Modal from "./Components/ProductDetails/Modal";


const ProductURL = "http://localhost:5000/api/products";

const App = () => {
  const [cart, setCart] = useState([]);
  const [prodList, setList] = useState([]);
  const [prodSearch, setprodSearch] = useState([]);
  const [prodFind, setprodFind] = useState(true);
  const [active, setActive] = useState(false);
  const [response, setResponse] = useState("");

 useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/")
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();

    const getProdList = async () => {
      const listProd = await axios.get(ProductURL);
      setprodSearch(listProd.data);
      setList(listProd.data);
    };
    getProdList();

    if (sessionStorage.getItem("cartProducts") !== null) {
      setCart([...JSON.parse(sessionStorage.getItem("cartProducts"))]);
    }
  }, []);

  const toogle = () => {
    setActive(!active);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    if (sessionStorage.getItem("cartProducts") !== null) {
      if (cart.find((prod) => prod._id === product._id)) {
        const newCart = cart.map((prod) =>
          prod._id === product._id
            ? {
                ...prod,
                qty: prod.qty + 1,
              }
            : prod
        );
        sessionStorage.setItem("cartProducts", JSON.stringify(newCart));
        return setCart([...newCart]);
      }
    }
    const nObj = { ...product, qty: 1 };
    const objLocalStorage = [...cart, nObj];
    sessionStorage.setItem("cartProducts", JSON.stringify(objLocalStorage));
    return setCart([...cart, nObj]);
  };

  const filterBy = async (filter) => {
    const val = filter.target.value;
    return await axios
      .get(val !== '' ? `http://localhost:5000/api/products/${val}` : 'http://localhost:5000/api/products')
      .then(response => {
        if(response.data !== ''){
          setprodFind(true);  
          val !== '' 
            ? setprodSearch(prodList.filter(prod => String(prod._id) === String(val)))
            : setprodSearch(prodList)
        }else{
          setprodSearch(prodList);
          setprodFind(false);  
        }
      }
      ).catch(error => {
        setprodFind(false);
      })
  };

  const searchProd = (product) => {
    const keyboard = product.target.value;

    if (keyboard !== "") {
      const prodFound = prodList.filter((prod) =>
        String(prod.name)
          .toLocaleLowerCase()
          .includes(keyboard.toLocaleLowerCase())
      );
      setprodSearch(prodFound);
      if (prodFound.length === 0) {
        setprodFind(false);
      } else {
        setprodFind(true);
      }
    } else {
      setprodSearch(prodList);
    }
  };

  const deleteProd = (product) => {
    const filter = cart.filter((prod) => prod._id !== product._id);
    sessionStorage.setItem("cartProducts", JSON.stringify(filter));
    setCart(filter);
  };

  return (
    <Layout>
      <Menu showProductsInCart={toogle} productsInCart={cart} />
      <Search
        filter={filterBy}
        searchProduct={searchProd}
      />
      <Bar />
      {prodFind ? (
        <Products
        addToCart={addToCart}
        products={prodSearch}
        />
      ) : (
        <h1 className="notFound prodCont--noregistros">
          Product Not Found
        </h1>
      )}

      <Modal active={active} toogle={toogle}>
        <div className="cartModal">
          {cart && cart.length > 0 ? (
            <p className="contenedor__titulo">Shopping Cart</p>
          ) : null}
          {cart && cart.length > 0 ? (
            cart.map((prod) => (
              <li className="cartItem" key={prod._id}>
                <img
                  className="cartImg"
                  src={`http://localhost:5000/${prod.image}`}
                  alt={prod.name}
                />
                <p className="cartName">{prod.name}</p>
                <span className="cartQty">
                qty : {prod.qty}
                </span>
                <img
                  alt={prod.name}
                  className="cta-eliminar"
                  src="../../images/delete.png"
                  onClick={() => deleteProd(prod)}
                />
              </li>
            ))
          ) : (
            <h2>Cart is empty</h2>
          )}
        </div>
      </Modal>
    </Layout>
  );
};

export default App;
