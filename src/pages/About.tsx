import { Box, Container, Typography } from "@mui/material";
import React from "react";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Banner from "../components/About/Banner";
import MissionAndVission from "../components/About/MissionAndVission";
import OurStory from "../components/About/OurStory";
import Founder from "../components/About/Founder";

const About: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Banner />
        <MissionAndVission />
        <OurStory />
        <Founder />
        <section
          style={{
            backgroundColor: "#fff",
            padding: "6.13rem 4.38rem",
          }}
        ></section>
      </div>
    </ThemeProvider>
  );
};

export default About;
