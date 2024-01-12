import { Container } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const heroStyling = makeStyles({
  hero: {
    width: "100%",
    height: "70vh",
    background: `url("/images/blog.jpg")`,
    // boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    objectFit: "cover",
    position: "relative",
  },
  heroText: {
    position: "absolute",
    bottom: "0rem",
    left: "0rem",
  },
});

const Banner: React.FC = () => {
  return (
    <>
      <section
        className={`${heroStyling().hero} p-[1.5rem] lg:px-[4.38rem] `}
        style={{
          //   backgroundColor: "#113167",
          position: "relative",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <div className="absolute left-0 bottom-0 lg:w-[28rem] grid gap-y-[.85rem] ">
            <h1 className="text-[#113167] leading-[3.4rem] text-[2.9rem] lg:leading-[4rem] lg:text-[3rem] font-[700] ">
              Discover the World of Law and Technology.
            </h1>

            <button className="px-6 py-3 text-[#113167] text-[.8rem] border border-[#113167] rounded-lg font-[600] hover:bg-[#113167] hover:text-white w-[10rem] ">
              READ NOW
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
