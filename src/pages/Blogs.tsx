import { Container } from "@mui/material";
import React from "react";
import Banner from "../components/Blog/Banner";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <>
      <Banner />
      <Container maxWidth="lg">
        <section className="mb-12 ">
          <div className="py-4 ">
            <h1 className="text-[2.5rem] text-[#113167] font-[600] ">Blogs</h1>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Blogs;
