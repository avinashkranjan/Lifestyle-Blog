import React from "react";
import Postitems from "./Postitems";
import Pagination from "./Pagination";

const Posts = () => {
  return (
    <>
      <div className="col-lg-8">
        <div className="blog-box list-style">
          <Postitems />
          <Postitems />
          <Postitems />
          <Postitems />
          <Postitems />

          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Posts;
