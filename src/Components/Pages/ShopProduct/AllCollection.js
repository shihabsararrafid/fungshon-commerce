import React from "react";
import LoadCategory from "../../Hooks/LoadCategory";
import LoadData from "../../Hooks/LoadData";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AllCollection = () => {
  const [categories] = LoadCategory();
  const navigate = useNavigate();
  const clicked = (c) => {
    navigate(`/collectionDetails/${c}`);
  };
  return (
    <div className="my-10 lg:w-[85%] mx-auto">
      <h1 className="text-4xl text-center">All Categories</h1>

      <div
        className="grid my-5 lg:grid-cols-4
       md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12"
      >
        {categories.map((c) => (
          <div className="w-[200px] mx-auto text-xl h-[300px] bg-black text-white uppercase flex justify-center items-center">
            {" "}
            <p className="cursor-pointer btn" onClick={() => clicked(c)}>
              {c}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCollection;
