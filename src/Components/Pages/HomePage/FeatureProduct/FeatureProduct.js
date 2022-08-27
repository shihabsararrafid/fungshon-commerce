import React from "react";
import CartWishlistNavigator from "../PopularProducts/CartWishlistNavigator";
import SingleProduct from "../PopularProducts/SingleProduct";
import img1 from "./../../../../Images/Feature/img1.png";
import img2 from "./../../../../Images/Feature/img2.png";
import img3 from "./../../../../Images/Feature/img3.png";
import img4 from "./../../../../Images/Feature/img4.png";
import img5 from "./../../../../Images/Feature/Rectangle 37.png";
import "./FeatureProduct.css";
const FeatureProduct = () => {
  return (
    <div className="lg:w-[85%] md:w-[90%] w-full my-10 md:mx-auto mx-0">
      <div className="text-center ">
        <h1 className="text-4xl">Featured Products</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="img-cont  mt-10">
        <img className="img_1 w-[90%] h-[90%]" src={img1} alt="" />
        <img className="img_2 w-[90%] h-[90%]" src={img2} alt="" />

        <img className="img_3 w-[90%] h-[90%]" src={img3} alt="" />
        {/* <div className="img_4 ">
          <img className="w-full " src={img4} alt="" />
          <div className="box">
            <h1 className="absolute bottom-[15%] left-[9%] text-4xl">
              Up to <span className="bg-[#F09522] py-1 px-3">50%</span>
              Off Sale{" "}
            </h1>
            <p className="check-btn">
              Check now
              <span className="line"></span>
            </p>

          </div> */}
        {/* </div> */}
        <div className="img_4 w-[90%] h-[90%]  relative">
          <img className="w-full h-full" src={img4} alt="" />
          <div className="box ">
            <h1 className="absolute top-[50%]  text-4xl">30% OFF</h1>
          </div>
        </div>

        <div className="relative  w-[90%] h-[95%] img_5">
          <img className="h-full w-full  object-cover" src={img5} alt="" />
          <CartWishlistNavigator></CartWishlistNavigator>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
