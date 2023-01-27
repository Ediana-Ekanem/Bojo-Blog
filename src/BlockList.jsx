import React from "react";
import { Link } from "react-router-dom";

//Props
const BlockList = ({ blogs, title }) => {
  console.log(blogs);
  return (
    <div className="mt-7 ">
      <h1 className="text-xl font-semibold">{title}</h1>
      {blogs.map((blog) => (
        <div
          className="mt-10 hover:shadow-lg-[white] hover:shadow p-4 max-w-[500px] ml-[10rem]"
          key={blog.id}
        >
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="text-red-500 font-bold text-lg">{blog.title}</h2>
            <p className=" ">Witten by {blog.author}</p>
          </Link>

          {/* <button onClick={() =>handleDelete(blog.id)} className="py-1 px-2 bg-gray-200 border-2 rounded border-gray-500">
            Delete Blog
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default BlockList;
