import { Fragment } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="max-w-[600px] mx-auto flex justify-between p-[20px] my-0  border-b-[1px] border-#f2f2f2 items-center ">
        <h1 className=" text-red-500 font-bold text-xl">The Dojo Blog</h1>

        <div className=" flex gap-x-5 ">
          <div className="hover:text-red-500">
            <Link to="/">Home</Link>
          </div>
          <div className="hover:text-red-500 hover:bg-">
            <Link to="/create">New Blog</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
