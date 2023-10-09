import { Box } from "@mui/material";
import React from "react";
import Banner from "../components/About/Banner";
import MissionAndVission from "../components/About/MissionAndVission";
import OurStory from "../components/About/OurStory";
import Founder from "../components/About/Founder";
import MeetTheTeam from "../components/About/MeetTheTeam";

const About: React.FC = () => {
  return (
    <Box>
      <Banner />
      <MissionAndVission />
      <OurStory />
      <Founder />
      <MeetTheTeam />
    </Box>
  );
};

export default About;
