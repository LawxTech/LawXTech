import React from "react";
import pageData from "../../data/index.json";
import Header from "./sections/header";
import Info from "./sections/info";
import Read from "./sections/read";
import Author from "./sections/author";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Blog = () => {
  const { blogId } = useParams<string>();
  console.log(blogId);
  const { newsletters } = pageData;
  const link = Number(blogId);
  if (!blogId || !newsletters[link]) {
    return <p>Blog not found {blogId} </p>;
  }
  const selectedBlog = newsletters[link];
  return (
    <>
      <>
        <div className="md:mt-5 w-full">
          <div className="md:container mx-auto xs:px-0 px-8 ">
            <div className="font-raleway w-full sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto ">
              <Link to="/blogs">
                <button className="px-6 py-3 text-[#113167] text-[.75rem] hover:border border-[#113167] rounded-lg font-[500] w-[6rem] mb-2 ">
                  Back
                </button>
              </Link>
              <Header selectedBlog={selectedBlog} />

              <Info selectedBlog={selectedBlog} />

              <Read selectedBlog={selectedBlog} />
            </div>
          </div>

          <Author />
        </div>
      </>
    </>
  );
};

export default Blog;
