import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  // How to access the different ids i the blogDetails route(useParams)
  const { id } = useParams();
  //Reusing the useFetch Hook
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  // The Delete Method
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      {/* <h2 className="font-bold text-2xl pl-6 max-w-[600px] mx-auto mt-16 ">
        Blog Details - {id}
      </h2> */}

      {isLoading && <div>Loading........</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="max-w-[600px] mx-auto ">
          <h2 className="font-bold  text-red-500  text-xl mt-10">
            {blog.title}
          </h2>
          <p className="font-bold text-gray-600 text-md ">
            Written by {blog.author}
          </p>
          <div className="my-2">{blog.body}</div>
          <button
            onClick={handleDelete}
            className=" text-white text-xs px-2 py-1 rounded mb-4 bg-red-500 hover:bg-gray-500 "
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
