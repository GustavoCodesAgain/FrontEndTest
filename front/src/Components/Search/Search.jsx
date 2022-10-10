import axios from "axios";
import React, { useState } from "react";

import "./Search.css";

function Search({ searchProduct, filter }) {
  const [valSelected, setVal] = useState("selectName");

  const getVal = (val) => {
    setVal(val.target.value);
  };

  return (
    <div className="search">
      <select
        className="selectSearch"
        onChange={(e) => getVal(e)}>
        <option value="selectName" selected>
          Search by name
        </option>
        <option value="selectId">Search by Id</option>
      </select>
      <input
        type={valSelected && valSelected === "selectName"
            ?  "search"
            : "number"
            } 
        onChange={
          valSelected && valSelected === "selectName"
            ? searchProduct
            : filter
            }
        className="inputSel"
        placeholder={
          valSelected && valSelected === "selectName"
            ? "Product Name  i.e: 'XBOX'"
            : "Product ID  i.e: '3'"
        }
      />
    </div>
  );
}

export default Search;
