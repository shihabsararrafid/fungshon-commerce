import logo from "./logo.svg";
import "./App.css";
import Advertise from "./Components/Shared/Advertise/Advertise";
import Header from "./Components/Shared/Header/Header";
import Home from "./Components/Pages/HomePage/Home/Home";
import { createContext, useContext, useEffect, useState } from "react";
import cogoToast from "cogo-toast";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./Components/Pages/ProductPage/ProductDetail";
import Footer from "./Components/Shared/Footer/Footer";
import AllCollection from "./Components/Pages/ShopProduct/AllCollection";
import CollectionDetail from "./Components/Pages/ShopProduct/CollectionDetail";
import Cart from "./Components/Pages/Cart/Cart";
import Sign from "./Components/Pages/SignIn/Sign";
import Authorization from "./Components/Pages/Authorization/Authorization";
import Profile from "./Components/Pages/Profile/Profile";
export const useCartId = createContext([]);
function App() {
  const [cartId, setCartId] = useState([]);

  // console.log(ids);
  const getAddedCartId = (arr) => {
    // console.log(arr.length, arr, "it is from app component");

    setCartId(arr);
  };
  const getIdFromCollection = (id) => {
    const newId = parseInt(id);
    // console.log(id);
    //console.log(cartId);
    const find = cartId?.find((i) => i === newId);
    if (find === undefined) {
      let newArr = [...cartId];
      newArr = [...newArr, newId];
      setCartId(newArr);

      cogoToast.success(" Added to Cart!", {
        position: "top-center",
      });
    } else {
      cogoToast.info("Item is already in the cart! ", {
        position: "top-center",
      });
    }
    //console.log(id, "is coming and catch in app");
    //checkSHow(id);
  };

  const getNewId = (id) => {
    const newId = parseInt(id);
    //console.log(id);
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
  const checkSHow = (id) => {
    const newId = parseInt(id);
    // console.log(id);
    const find = cartId?.find((i) => i === newId);
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
  // console.log(cartId);
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
          <Route path="collectionDetails">
            <Route
              path=":category"
              element={
                <CollectionDetail
                  getIdFromCollection={getIdFromCollection}
                ></CollectionDetail>
              }
            />
          </Route>

          <Route path="/shop" element={<AllCollection></AllCollection>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/sign" element={<Authorization></Authorization>}></Route>
          <Route path="/user" element={<Profile></Profile>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </useCartId.Provider>
  );
}

export default App;
