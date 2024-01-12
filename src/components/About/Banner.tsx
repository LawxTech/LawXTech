import { Box, Container } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const heroStyling = makeStyles({
  hero: {
    width: "100%",
    height: "75vh",
    background: `url("/images/about-us-landing-image.jpeg")`,
    boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)",
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
          backgroundColor: "#113167",
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
          <Box
            sx={{
              position: "absolute",
              bottom: "0rem",
              left: "0rem",
            }}
          >
            <h1
              data-aos="fade-up"
              className="text-white leading-[3.4rem] text-[2.9rem] lg:leading-[4rem] lg:text-[4rem] font-bold"
            >
              Discover Our Mission <br /> and Vision.
            </h1>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Banner;
