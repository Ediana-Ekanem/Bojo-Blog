import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Create from "./Create";
import { Routes, Route } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />

        {/*A route Parameter A Changeable part */}
        <Route path="/blogs/:id" element={<BlogDetails />} />

        {/* The not found page route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// import { useParams } from "react-router-dom";
// import useFetch from "./useFetch";

// const BlogDetails = () => {
//   // How to access the different ids i the blogDetails route(useParams)
//   const { id } = useParams();

//   //Reusing the useFetch Hook
//   const {
//     data: blog,
//     error,
//     isLoading,
//   } = useFetch("http://localhost:8000/blogs" + id);
//   return (
//     <div>
//       {/* <h2 className="font-bold text-2xl pl-6 max-w-[600px] mx-auto mt-16 ">
//         Blog Details - {id}
//       </h2> */}

//       {isLoading && <div>Loading........</div>}
//       {error && <div>{error}</div>}
//       {blog && (
//         <article>
//           <h2>{blog.title}</h2>
//           <p>Written by {blog.author}</p>
//           <div>{blog.body}</div>
//         </article>
//       )}
//     </div>
//   );
// };

// export default BlogDetails;

// import { useParams } from "react-router-dom";
// import useFetch from "./useFetch";

// const BlogDetails = () => {
//   // How to access the different ids i the blogDetails route(useParams)
//   const { id } = useParams();

//   //Reusing the useFetch Hook
//   const {
//     data: blog,
//     error,
//     isLoading,
//   } = useFetch("http://localhost:8000/blogs" + id);
//   return (
//     <div>
//       {/* <h2 className="font-bold text-2xl pl-6 max-w-[600px] mx-auto mt-16 ">
//         Blog Details - {id}
//       </h2> */}

//       {isLoading && <div>Loading........</div>}
//       {error && <div>{error}</div>}
//       {blog && (
//         <article>
//           <h2>{blog.title}</h2>
//           <p>Written by {blog.author}</p>
//           <div>{blog.body}</div>
//         </article>
//       )}
//     </div>
//   );
// };

// export default BlogDetails;
