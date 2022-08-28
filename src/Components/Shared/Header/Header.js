import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsBag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiAlignLeft } from "react-icons/fi";
import "./Header.css";
import { useCartId } from "../../../App";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  const arrId = useContext(useCartId);
  console.log("it is from header", arrId);
  return (
    <div className="h-[75px] w-full flex">
      <div className="flex w-[97%] relative md:w-[90%] lg:w-[75%] mx-auto justify-between items-center">
        <h1 className="title text-3xl">
          <Link to="/">Funshion</Link>
        </h1>
        <div className="navigation-bar      flex items-center ">
          <ul
            className={`font-thin mt  ${isOpen ? "flex" : "hidden"}  ${
              isOpen ? "navigation-small" : ""
            }
          
             md:flex  md:mr-8  items-center`}
          >
            <li className="md:mx-2  my-1">
              <Link onClick={() => setOpen(!isOpen)} to="/">
                Home
              </Link>{" "}
            </li>
            <li className="md:mx-2 my-1">
              <Link onClick={() => setOpen(!isOpen)} to="/about">
                About
              </Link>
            </li>
            <li className="md:mx-2 my-1">
              <Link onClick={() => setOpen(!isOpen)} to="/shop">
                Shop
              </Link>
            </li>
            <li className="md:mx-2 my-1">
              <Link onClick={() => setOpen(!isOpen)} to="/pages">
                Pages
              </Link>
            </li>
            <li className="md:mx-2 my-1">
              <Link onClick={() => setOpen(!isOpen)} to="blog">
                Blog
              </Link>
            </li>
          </ul>
          <ul className="icon flex">
            <BsSearch className="text-2xl  cursor-pointer mx-2 "></BsSearch>
            <Link to="sign">
              <CgProfile className="text-2xl cursor-pointer mx-2 "></CgProfile>
            </Link>
            <p className="relative">
              <Link to="cart">
                {" "}
                <BsBag className="text-2xl w-full    cursor-pointer mx-2  "></BsBag>
              </Link>

              <p
                className={`absolute  rounded-full px-[8px] py-[1px] text-white font-mono font-bold  ${
                  arrId.length === 0 ? "bg-red-500" : "bg-green-600"
                }  -top-[8px] left-[2px]`}
              >
                {arrId.length}
              </p>
            </p>
            <FiAlignLeft
              onClick={() => setOpen(!isOpen)}
              className="text-2xl md:hidden    cursor-pointer mx-2  "
            ></FiAlignLeft>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
