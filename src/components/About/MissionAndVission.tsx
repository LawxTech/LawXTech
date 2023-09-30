import { Box, Container, Typography } from "@mui/material";
import React from "react";

const MIssionAndVission = () => {
  return (
    <>
      <section
        style={{
          padding: "7.38rem 4.38rem",
          backgroundColor: "#113167",
          color: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <Box>
              <Typography variant="h2">Our Mission</Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  lineHeight: "1.7rem",
                }}
              >
                At #LawxTech, our mission is to bridge the gap between the
                worlds of law and technology, providing a dynamic platform where
                lawyers and law students can explore, learn, and thrive in the
                ever-evolving landscape of legal tech and/or just tech. Through
                insightful sessions, expert guidance, and collaborative
                networking, we empower our participants to embrace innovation,
                cultivate expertise, and pioneer positive change at the
                intersection of law and technology.{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "4rem",
              }}
            >
              <Typography variant="h2">Our Vision</Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  lineHeight: "1.7rem",
                }}
              >
                Our vision is to pioneer a transformed legal profession by
                empowering legal minds with the skills to navigate technology.
                We envision tech-savvy lawyers who integrate innovation and
                drive impact, shaping a collaborative future in law and tech for
                lawyers and/or law students whether rooted in law or aspiring to
                transition to tech, with #LawxTechSeries as the catalyst.
              </Typography>
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default MIssionAndVission;
