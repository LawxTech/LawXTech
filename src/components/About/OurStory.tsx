import { Box, Container, Typography } from "@mui/material";
import React from "react";

const OurStory: React.FC = () => {
  return (
    <div>
      <section
        style={{
          backgroundColor: "#E7EBF0",
          padding: "6.13rem 4.38rem",
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <Typography variant="h2">Our Story</Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: "1.7rem",
                marginBottom: "0.625rem",
              }}
            >
              Law x Tech launched in 2023 to pioneer a new work model that helps
              legal professionals find more flexibility and connect the legal
              spectrum to technology for more opportunities. We understand that
              the faculties of law and law school in Nigeria do not equip
              students with knowledge of technology and how they, as lawyers,
              can find a balance in these two industries. There is a lack of
              awareness and understanding among lawyers about the potential
              opportunities and challenges that come with a tech-centric
              approach to law. The legal landscape is diverse, with one of its
              emerging areas being Tech Law or Legal Technology. We have taken
              the responsibility to arm this next generation of professionals
              with the tools they need to thrive in the new internet economy.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: "1.7rem",
                marginBottom: "0.625rem",
              }}
            >
              We want to bridge the gap between the worlds of law and
              technology, providing a dynamic platform where lawyers and law
              students can explore, learn, and thrive in the ever-evolving
              landscape of legal tech and/or just tech. Through insightful
              sessions, expert guidance, and collaborative networking, we
              empower our participants to embrace innovation, cultivate
              expertise, and pioneer positive change at the intersection of law
              and technology. _ Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: "1.7rem",
                marginBottom: "0.625rem",
              }}
            >
              We hope to pioneer a transformed legal profession by empowering
              legal minds with the skills to navigate technology. We envision
              tech-savvy lawyers who integrate innovation and drive impact,
              shaping a collaborative future in law and tech for lawyers and/or
              law students whether rooted in law or aspiring to transition to
              tech, with Law x Tech Community as the catalyst.
            </Typography>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default OurStory;
