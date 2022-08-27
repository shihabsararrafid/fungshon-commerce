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
    console.log(arr.length, arr, "it is from app component");

    setCartId(arr);
  };

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
              <ProductDetail getAddedCartId={getAddedCartId}></ProductDetail>
            }
          ></Route>
        </Routes>
      </div>
    </useCartId.Provider>
  );
}

export default App;
