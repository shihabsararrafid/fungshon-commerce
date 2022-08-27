import logo from "./logo.svg";
import "./App.css";
import Advertise from "./Components/Shared/Advertise/Advertise";
import Header from "./Components/Shared/Header/Header";
import Home from "./Components/Pages/HomePage/Home/Home";
import { createContext, useContext, useState } from "react";

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
        <Home getAddedCartId={getAddedCartId}></Home>
      </div>
    </useCartId.Provider>
  );
}

export default App;
