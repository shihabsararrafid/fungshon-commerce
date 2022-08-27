import logo from "./logo.svg";
import "./App.css";
import Advertise from "./Components/Shared/Advertise/Advertise";
import Header from "./Components/Shared/Header/Header";
import Home from "./Components/Pages/HomePage/Home/Home";
import { createContext, useContext, useState } from "react";
import cogoToast from "cogo-toast";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./Components/Pages/ProductPage/ProductDetail";
export const useCartId = createContext([]);
function App() {
  const [cartId, setCartId] = useState([]);
  const getAddedCartId = (arr) => {
    // console.log(arr.length, arr, "it is from app component");

    setCartId(arr);
  };
  const getNewId = (id) => {
    const newId = parseInt(id);
    console.log(id);
    const find = cartId.find((i) => i === newId);
    if (find === undefined) {
      const newArr = cartId.push(newId);
      setCartId(newArr);
      cogoToast.success(" Added to Cart!", {
        position: "top-center",
      });
    } else {
      cogoToast.info("Item is already in the cart! ", {
        position: "top-center",
      });
    }
  };
  console.log(cartId);
  return (
    <useCartId.Provider value={cartId}>
      <div className="App">
        <Advertise></Advertise>
        <Header></Header>
        <hr className="shadow-2xl" />
        <Routes>
          <Route
            path="/"
            element={<Home getAddedCartId={getAddedCartId}></Home>}
          ></Route>

          <Route
            path="/productDetail/:id"
            element={
              <ProductDetail
                getNewId={getNewId}
                getAddedCartId={getAddedCartId}
              ></ProductDetail>
            }
          ></Route>
        </Routes>
      </div>
    </useCartId.Provider>
  );
}

export default App;
