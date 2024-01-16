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
          <div className="absolute left-0 bottom-0 lg:w-[26rem] grid gap-y-[.75rem] ">
            <p className="text-[#113167] ">Lawxtech </p>
            <h1 className="text-[#113167] leading-[3.2rem] text-[2.9rem] lg:leading-[3.5rem] lg:text-[2.75rem] font-[700] ">
              Discover the World of Law and Technology.
            </h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
