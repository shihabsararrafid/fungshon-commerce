import cogoToast from "cogo-toast";
import React, { createContext, useState } from "react";
import Banner from "../Banner/Banner";
import Collection from "../Collection/Collection";
import PopularProducts from "../PopularProducts/PopularProducts";
import Specialbenefit from "../SpecialBenefit/Specialbenefit";

const Home = ({ getAddedCartId }) => {
  const [ids, setIds] = useState([]);
  const getCartID = (id) => {
    console.log("id is getting from home component", id);
    const find = ids.find((i) => i === id);
    if (find === undefined) {
      setIds([...ids, id]);
      cogoToast.success(" Added to Cart!", {
        position: "top-center",
      });
    } else {
      cogoToast.info("Item is already in the cart! ", {
        position: "top-center",
      });
    }
  };
  getAddedCartId(ids);
  //console.log(ids);
  const UseId = createContext([]);
  return (
    <div className="w-full">
      <Banner></Banner>
      <Specialbenefit></Specialbenefit>
      <Collection></Collection>
      <PopularProducts getCartID={getCartID}></PopularProducts>
    </div>
  );
};

export default Home;
