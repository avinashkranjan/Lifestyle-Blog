import React from "react";
import Header from "../parts/Header";
import Comments from "../parts/Comments";
import PostDesc from "../parts/PostDesc";
import Footer from "../parts/Footer";

const Single = () => {
  return (
    <>
      <Header />

      <div className="single-post no-sidebar">
        <PostDesc />
        <Comments />
      </div>

      <Footer />
    </>
  );
};

export default Single;
