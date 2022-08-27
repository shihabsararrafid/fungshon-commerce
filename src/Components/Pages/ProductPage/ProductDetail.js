import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Circle from "../../Shared/Circle/Circle";
import Rating from "../../Shared/Ratings/Rating";
import { BsChevronDown } from "react-icons/bs";
import wishlist from "./../../../Images/Icons/wishlist (1).png";
import compare from "./../../../Images/Icons/compare.png";
import SocialIcon from "../../Shared/SocialIcon/SocialIcon";
import PopularProducts from "../HomePage/PopularProducts/PopularProducts";
import Specialbenefit from "../HomePage/SpecialBenefit/Specialbenefit";
import cogoToast from "cogo-toast";
const ProductDetail = ({ getAddedCartId, getNewId }) => {
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
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <div className="w-full">
      <div className="lg:w-[75%] mb-14 grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] items-center justify-center gap-y-[50px] mx-auto">
        {/* div1 */}
        <div className="mx-auto">
          <img
            className="h-[695px] w-[524px] object-fit"
            src={product?.image}
            alt=""
          />
          <div className="grid mt-5 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 justify-center items-center gap-3">
            <div className="md:w-[161px] w-full h-[161px] flex justify-center bg-[#a59e9e]  items-center">
              <p>Preview1</p>
            </div>
            <div className="md:w-[161px] w-full h-[161px] flex justify-center bg-[#a59e9e]  items-center">
              <p>Preview2</p>
            </div>
            <div className="md:w-[161px] w-full h-[161px] flex justify-center bg-[#a59e9e]  items-center">
              <p>Preview3</p>
            </div>
          </div>
        </div>
        {/* div2 */}
        <div className="p-6 mx-0 sm:mx-20 lg:mx-0 flex flex-col gap-y-[25px]">
          <p>{product?.title}</p>
          <div className="flex gap-3">
            {" "}
            <p>${product?.price}</p>
            <p className="line-through text-[#B5B2B2]">${product?.price}</p>
          </div>
          <p>
            <Rating rating={product?.rating?.rate}></Rating>
          </p>
          <hr />
          <p className="flex gap-4">
            Colors: <Circle></Circle>
          </p>
          <p className="flex gap-4">
            <button
              id="btna"
              className="btn flex items-center gap-3  bg-[#BDBDBD]"
            >
              Size <BsChevronDown></BsChevronDown>
            </button>
            <button
              id="btna"
              className="btn  flex items-center gap-3 bg-[#BDBDBD]"
            >
              QTY <BsChevronDown></BsChevronDown>
            </button>
          </p>
          <p className="text-[#F09522]">
            {" "}
            Only {product?.rating?.count} Left In Stock
          </p>
          <p className="flex gap-7">
            <button onClick={() => getNewId(id)} id="btna" className="btn">
              Add To Cart
            </button>
            <button className="btn">Buy Now</button>
          </p>
          <hr />
          <div className="text-[#BDBDBD] flex gap-5">
            <div className="flex gap-2 items-center">
              <img className="cursor-pointer" src={wishlist} alt="" />
              <p>Add to Wishlist</p>
            </div>
            <div className="flex gap-2 items-center">
              <img className="cursor-pointer" src={compare} alt="" />
              <p>Add to Compare</p>
            </div>
          </div>
          <p className="text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less page when looking
            at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less
          </p>{" "}
          <div className="mt-12">
            <div className="flex gap-3">
              <input className="bg-gray-600" type="checkbox" name="" id="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                reiciendis enim iste?
              </p>
            </div>
            <div className="flex gap-3">
              <input className="bg-gray-600" type="checkbox" name="" id="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                reiciendis enim iste?
              </p>
            </div>
            <div className="my-4">
              <p className="flex gap-1">
                Share :<SocialIcon></SocialIcon>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* div3 */}

        {/* div4 */}
      </div>
      <div className="my-10">
        <Specialbenefit></Specialbenefit>
      </div>
      <PopularProducts getCartID={getCartID}></PopularProducts>
    </div>
  );
};

export default ProductDetail;
