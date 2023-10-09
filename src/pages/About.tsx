import { Box } from "@mui/material";
import React from "react";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Banner from "../components/About/Banner";
import MissionAndVission from "../components/About/MissionAndVission";
import OurStory from "../components/About/OurStory";
import Founder from "../components/About/Founder";
import MeetTheTeam from "../components/About/MeetTheTeam";

const About: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Banner />
        <MissionAndVission />
        <OurStory />
        <Founder />
        <MeetTheTeam />
      </Box>
    </ThemeProvider>
  );
};

export default About;
