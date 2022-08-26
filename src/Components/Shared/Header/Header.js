import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsBag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiAlignLeft } from "react-icons/fi";
import "./Header.css";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
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
              <Link to="/home">Home</Link>{" "}
            </li>
            <li className="md:mx-2 my-1">
              <Link to="/about">About</Link>
            </li>
            <li className="md:mx-2 my-1">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="md:mx-2 my-1">
              <Link to="/pages">Pages</Link>
            </li>
            <li className="md:mx-2 my-1">
              <Link to="blog">Blog</Link>
            </li>
          </ul>
          <ul className="icon flex">
            <BsSearch className="text-2xl  cursor-pointer mx-2 "></BsSearch>
            <CgProfile className="text-2xl cursor-pointer mx-2 "></CgProfile>
            <BsBag className="text-2xl     cursor-pointer mx-2  "></BsBag>
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
