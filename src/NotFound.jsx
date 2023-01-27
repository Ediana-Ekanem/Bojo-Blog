import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="  max-w-[600px] pl-4    mx-auto mt-16">
      <h2 className="font-bold text-2xl ">Sorry</h2>
      <p>Page cannot be found</p>
      <div className="text-blue-500 underline underline-offset-1 hover:underline-offset-4">
        <Link to="/">Back to the home page........</Link>
      </div>
    </div>
  );
};

export default NotFound;
