import React from "react";
import { Container } from "@mui/material";
import Banner from "../components/Blog/Banner";
import data from "../data/index.json";
import DisplayCard from "../components/shared/DisplayCard/DisplayCard";

const Blogs = () => {
  const { newsletters } = data;
  return (
    <>
      <Banner />
      <Container maxWidth="lg">
        <section className="mb-12 border-b border-[#113167] ">
          <div className="py-4 px-6 sm:px-0 pt-[3rem] grid gap-y-[1.5rem] ">
            <h1 className="text-[1.75rem] text-[#113167] font-[500] ">
              Recent Newsletters
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-[1rem] ">
              {newsletters.map((item, index) => (
                <div className="" key={index}>
                  <DisplayCard display={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Blogs;
