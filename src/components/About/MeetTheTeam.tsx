import React from "react";
import { Typography, Container, Box } from "@mui/material";
import "../../App.css"; // Adjust the path to your CSS file if needed

const teamMembers = [
  {
    name: "Sopuruchi Rufus",
    position: "Founder",
    image: "Sopuruchi Rufus, Founder .jpeg",
  },
  {
    name: "Kate Ndemson Ekpo",
    position: "Project Manager ",
    image: "Kate Ndemson Ekpo, Project Manager .jpeg",
  },
  {
    name: "Joel",
    position: "Graphics Designer",
    image: "Joel, Graphics Designer.jpeg",
  },
  {
    name: "Ezinne",
    position: "Social Media Manager",
    image: "Ezinne, Social Media Manager Vounteer.jpeg",
  },
  {
    name: "Daniel",
    position: "Brand Identity Designer",
    image: "Daniel Brand Identity Designer.jpg",
  },
  {
    name: "Chidimma Chukwuani",
    position: "Content Creator",
    image: "Chidimma M. Chukwuani, Content Creator Volunteer.jpeg",
  },
  {
    name: "Joy",
    position: "Content Writer",
    image: "Joy, Content Writer Volunteer.jpeg",
  },
  {
    name: "Saliu Ayomiotan",
    position: "Content Writer",
    image: "Saliu Waliyat Ayomiotan, Content Writer Volunteer.jpeg",
  },
  {
    name: "Vivian",
    position: "Content Writer",
    image: "Vivian, Content Writer Volunteer.jpg",
  },
  {
    name: "Bakare Adefolakemi",
    position: "Email Marketer ",
    image: "BAKARE ADEFOLAKEMI, Email Marketer Volunteer.JPG",
  },
  {
    name: "Aniefiok Michael",
    position: "UI/UX",
    image: "Aniefiok Michael, UI_UX Volunteer .jpeg",
  },
  {
    name: "Opeyemi Oduyemi",
    position: "Fullstack Developer",
    image: "Opeyemi Oduyemi  Fullstack Developer.jpg",
  },
  {
    name: "Rofiat Olusanya",
    position: "Web Developer",
    image: "Rofiat Olusanya, Web Developer.jpg",
  },
  {
    name: "Rere Alonge",
    position: "Social Media Manager ",
    image: "Rere Alonge Social Media Manager .jpg",
  },
];

const MeetTeam = () => {
  const sharedTextStyle = {
    fontSize: "0.9rem",
    fontWeight: "400",
  };

  return (
    <div>
      <section
        style={{
          backgroundColor: "#fff",
          padding: "6.13rem 4.38rem",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            color="#133167"
            align="center"
            sx={{ fontSize: "1.8rem", marginTop: "4%", marginBottom: "4%" }}
            marginTop={2}
            fontWeight="700"
            marginX="auto"
            gutterBottom
          >
            Meet the Team
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "4%",
            }}
          >
            {teamMembers.map((member, index) => (
              <Box key={index} sx={{}}>
                <img
                  //   src={require(`../../assets/team/3.png`)}
                  src={require(`../../assets/Members/${member.image}`)}
                  alt={`Team member ${index + 1}`}
                  style={{
                    width: "15rem",
                    height: "15rem",
                    borderRadius: 8,
                  }}
                />
                <Typography variant="h6" sx={sharedTextStyle} paragraph>
                  {member.position}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "1.125rem",
                    marginTop: -2,
                  }}
                >
                  {member.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default MeetTeam;
