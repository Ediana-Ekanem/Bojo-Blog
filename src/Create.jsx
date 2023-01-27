import React, { useState } from "react";

//useHistory {now useNavigate} fro redirecting
import { useNavigate } from "react-router-dom";

const Create = () => {
  //Use to track what the user inserts in the input form called title
  // -- value and onChage always makes this work
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Eddy");
  const [isPending, setIsPending] = useState(false);

  // On this OBJECT , you caN USE SEVERAL METHODS
  // TO GO BACK THROUGH HISTORY, GO FORWARD THROUGH HISTORY
  const history = useNavigate();

  const handleSubmit = (e) => {
    //To prevent default action  (form from refereshing)
    e.preventDefault();

    // Reacting to the submit event
    const blog = { title, body, author };

    setIsPending(true);

    // Post Request
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      //The type of content been sent--- which in this case is json data
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog Added");
      setIsPending(false);
      //history.go(1);

      //Redirecting the user back to the home page
      history("/");
    });
  };
  return (
    <div>
      <h2 className="font-bold text-2xl pl-6 max-w-[200px]  text-red-500  mx-auto mt-16">
        Add a new Blog
      </h2>

      <form
        onSubmit={handleSubmit}
        className=" max-w-[350px] mx-auto mt-16 text-center"
      >
        <label className="block  text-left ">Blog title:</label>
        <input
          className="  w-[350px] border border-gray-300 text-sm px-2 text-gray-500 py-1"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="block text-left">Blog body:</label>
        <textarea
          className="w-[350px] border border-gray-300 text-sm px-2 text-gray-500 pt-1"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label className="block text-left ">Blog author:</label>
        <select
          className="block w-[350px] px-1 py-1 mb-4 border border-gray-300 text-sm "
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Eddy</option>
          <option value="Mfoniso">Mfoniso</option>
          <option value="Miranda">Miranda</option>
          <option value="Danny">Danny</option>
          <option value="Abass">Abass</option>
        </select>
        {!isPending && (
          <button className="block mx-auto text-white text-xs px-2 py-1 rounded bg-red-500 hover:bg-gray-500 ">
            Add Blog
          </button>
        )}

        {isPending && (
          <button
            disabled
            className="block mx-auto text-white text-xs px-2 py-1 rounded bg-red-500"
          >
            Add blog.........
          </button>
        )}
      </form>

      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
