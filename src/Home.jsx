import React from "react";
import BlockList from "./BlockList";
import useFetch from "./useFetch";

const Home = () => {
  // Here we could use an array but using an object makes it that the order of the propeties doesn't matter
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="mt-[40px]  ">
      {/* A conditional template */}
      {error && <div>{error}</div>}
      {isLoading && <div>Loading ...........</div>}
      <div className="ml-[5rem]">
        {blogs && <BlockList blogs={blogs} title="All blogs!" />}
      </div>

      {/* <button
        className="py-1 px-2 bg-gray-200 border-2 rounded border-gray-500+/"
        onClick={() => setAge(21)}
      >
        Chang Age
      </button>
      <h5>{age}</h5> */}
      {/* <BlockList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blog!" 
      /> */}

      {/* <h1 className="text-xl ">Home Page</h1>
      <p>
        Mary Elijah is {age} and her stack is {stack}
      </p>
      <button
        className="bg-gray-300 py-1 px-3 font-bold rounded mt-2 border-2 border-black "
        onClick={handleClickEvent}
      >
        Click me
      </button> */}
    </div>
  );
};

export default Home;
