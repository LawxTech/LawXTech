import React from "react";
import { Typography, Box, Container } from "@mui/material";
import "../.../../../App.css"



interface FeatureBoxProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ src, alt, title, description }) => {
  const featureBoxStyle: React.CSSProperties = {
    maxWidth: 300,
    margin: "auto",
    padding: "16px",
    backgroundColor: "#CFD6E1",
    height:"30vh",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px", 
  };

  const imageStyle: React.CSSProperties = {
    width: 50,
    height: 50,
    objectFit: "contain",
    marginLeft: 6,
    marginRight: 3,
    marginTop: 4,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "1.2rem",
    fontWeight: "light",
    marginLeft: "14px",
    marginTop: "8px",
    marginBottom: "5px"
  };

  const descriptionStyle: React.CSSProperties = {
    textAlign: "center",
    marginTop: "8px"
  };

  return (
    <>
      <div style={featureBoxStyle}>
        <img src={src} alt={alt} style={imageStyle} />
        <p style={titleStyle}>{title}</p>
        <div className="features_desc">
          <small style={descriptionStyle}>{description}</small>
        </div>
      </div>
    </>
  );
};

export default FeatureBox;


export const Features = () => {
  return (
    <>
      <div>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "#133167",
              fontWeight: "bold",
              fontSize: "1.8rem",
              marginTop: 6,
              marginBottom: 3,
            }}>
            Why Join Our Community?
          </Typography>
        </Container>
        <section>
        </section>
        <Container maxWidth="xl" sx={{ display:"flex", justifyContent:"center"}}>
                    <Box maxWidth="sm">
                      <FeatureBox
                        src={require("../../assets/icons/learning.png")}
                        alt="Feature"
                        title="Learning Resources"
                        description="We share resources to help you grow in your learning"
                      />
                    </Box>
                    <Box maxWidth="sm" className="gap">
                      <FeatureBox
                        src={require("../../assets/icons/learning.png")}
                        alt="Feature"
                        title="Learning Resources"
                        description="We share resources to help you grow in your learning"
                      />
                    </Box>
                    <Box maxWidth="sm" className="gap">
                      <FeatureBox
                        src={require("../../assets/icons/learning.png")}
                        alt="Feature"
                        title="Learning Resources"
                        description="We share resources to help you grow in your learning"
                      />
                    </Box>
                    <Box maxWidth="sm" className="gap">
                      <FeatureBox
                        src={require("../../assets/icons/learning.png")}
                        alt="Feature"
                        title="Learning Resources"
                        description="We share resources to help you grow in your learning"
                      />
                    </Box>
                </Container>
        {/* <Grid container maxWidth="md">
          <Grid item>
            <div>
              <FeatureBox
                src={require("../../assets/icons/learning.png")}
                alt="Feature"
                title="Learning Resources"
                description="We share resources to help you grow in your learning"
              />
            </div>
          </Grid>
          <Grid item maxWidth="md">
            <FeatureBox
              src={require("../../assets/icons/webinar.png")}
              alt="Feature"
              title="Webinars/Workshop"
              description="We share resources to help you grow in your learning"
            />
          </Grid>
          <Grid item maxWidth="md">
            <FeatureBox
              src={require("../../assets/icons/mentorship.png")}
              alt="Feature"
              title="Mentorship"
              description="We share resources to help you grow in your learning"
            />
          </Grid>
          <Grid item maxWidth="md">
            <FeatureBox
              src={require("../../assets/icons/internship.png")}
              alt="Feature"
              title="Internship"
              description="We share resources to help you grow in your learning"
            />
          </Grid>
        </Grid> */}
      </div>
    </>
  );
};