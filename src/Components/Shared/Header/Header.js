import React from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsBag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./Header.css";
const Header = () => {
  return (
    <div className="h-[75px] w-full flex">
      <div className="flex w-[97%] md:w-[90%] lg:w-[75%] mx-auto justify-between items-center">
        <h1 className="title text-3xl">
          <Link to="/">Funshion</Link>
        </h1>
        <div className="navigation-bar   flex items-center ">
          <ul className="font-thin hidden md:flex mr-8  items-center">
            <li className="mx-2">
              <Link to="/home">Home</Link>{" "}
            </li>
            <li className="mx-2">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-2">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="mx-2">
              <Link to="/pages">Pages</Link>
            </li>
            <li className="mx-2">
              <Link to="blog">Blog</Link>
            </li>
          </ul>
          <ul className="icon flex">
            <BsSearch className="text-2xl  cursor-pointer mx-2 "></BsSearch>
            <CgProfile className="text-2xl cursor-pointer mx-2 "></CgProfile>
            <BsBag className="text-2xl     cursor-pointer mx-2  "></BsBag>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
