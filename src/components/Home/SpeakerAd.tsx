import React from "react";
import { Typography, Container, Box } from "@mui/material";
import Button from "@mui/material/Button";
import "../.../../../App.css";
import { Link } from "react-router-dom";

export const SpeakerAd = () => {
  return (
    <Container maxWidth="lg">
      <div className="min-h-[40vh] grid grid-cols-1 md:grid-cols-2 items-center mb-10 md:mb-24 px-6 md:px-0 ">
        <Box maxWidth="sm" marginTop={20} marginRight={1}>
          <Typography
            variant="h4"
            className="adText"
            sx={{ fontSize: "1.8rem" }}
            marginTop={2}
            fontWeight="normal"
            marginX="auto"
            gutterBottom
          >
            Become a Speaker at the Law x Tech Series
          </Typography>
          <p className=" text-[.9rem] text-justify ">
            Are you passionate about the intersection of law and technology? Do
            you have insights and experiences that can inspire and educate
            others in this rapidly evolving field? If so, we invite you to
            become a featured speaker at the monthly Law x Tech Series webinar!
          </p>
          <div className="">
            <Link to="https://forms.gle/NFD7ex8vRV1YKZV39" target="_blank">
              <button className="text-white px-10 h-[3rem] rounded-md bg-[#131157] font-[600] text-[.95rem] mt-[1.5rem] ">
                SPEAK HERE
              </button>
            </Link>
          </div>
        </Box>
        <Box maxWidth="md" marginLeft={12} className="hidden md:block">
          <img
            src={require("../../assets/speaker.png")}
            alt="Speaker"
            className="adImg"
          />
        </Box>
      </div>
    </Container>
  );
};
