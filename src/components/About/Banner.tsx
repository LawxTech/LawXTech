import { Box, Container, Typography } from "@mui/material";
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
        className={heroStyling().hero}
        style={{
          padding: "0 4.38rem",
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
            <Typography
              variant="h1"
              sx={{
                color: "#fff",
              }}
            >
              Discover Our Mission <br /> and Vision.
            </Typography>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Banner;
