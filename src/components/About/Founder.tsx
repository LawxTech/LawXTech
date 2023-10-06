import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Founder: React.FC = () => {
  return (
    <div>
      <section
        style={{
          padding: "6.13rem 4.38rem",
        }}
      >
        <Container
          maxWidth="lg"
          style={{
            backgroundColor: "#fff",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            rowGap: "3.5rem",
            // alignItems: "center",
            border: "1px solid #000",
          }}
        >
          <Box
            component="img"
            sx={{
              height: "40rem",
              width: "90%",
            }}
            src="/images/sopuruchi.jpeg"
            alt="about"
          />
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#113167",
              }}
            >
              About our Founder
            </Typography>
            <Typography
              variant="body1"
              fontWeight={400}
              sx={{
                marginBottom: "0.625rem",
                lineHeight: "1.7rem",
                textJustify: "inter-punctuation",
              }}
            >
              Meet Sopuruchi Rufus, the driving force behind Law x Tech. With a
              dynamic blend of legal expertise and technological innovation,
              being a product manager herself, she has set the course for our
              organization’s exceptional journey.
            </Typography>

            <Typography
              variant="body1"
              fontWeight={400}
              sx={{
                marginBottom: "0.625rem",
                lineHeight: "1.7rem",
              }}
            >
              In a world increasingly shaped by technology, Sopuruchi Rufus
              recognized the transformative power of innovation early on. Her
              passion for technology and its potential to revolutionize the
              legal industry has driven Law x Tech to the forefront of the
              legal-tech realm.
            </Typography>
            <Typography
              variant="body1"
              fontWeight={400}
              sx={{
                marginBottom: "0.625rem",
                lineHeight: "1.7rem",
              }}
            >
              Her dedication to merging the worlds of law and technology has
              empowered Law x Tech to provide opportunities to law professionals
              to acquire tech skills.
            </Typography>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Founder;
