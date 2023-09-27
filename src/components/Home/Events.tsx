import { Typography, Grid, Container, Box } from "@mui/material";
import "../.../../../App.css"


export const Events = () => {
  return (
    <>
      <div className="spacing">
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
            }}
            gutterBottom>
            Upcoming Events
          </Typography>
        </Container>
        <section>
        </section>
        <Grid container maxWidth="xl" sx={{ display: "flex", alignItems:"center", justifyContent:"center" }}>
          <Grid item maxWidth="sm">
            <div>
              <img src={require("../../assets/events/event1.png")} width="87%" className="gap" alt="Upcoming Events" />
              <Typography variant="h5" sx={{fontSize:"1rem", marginLeft:"12%"}} id="cta">Community Chat</Typography>
              <Typography variant="h6" sx={{fontSize:"0.8rem" , marginLeft:"12%"}} id="cta">30th September 2023</Typography>
            </div>
          </Grid>
          <Grid item maxWidth="sm">
            <img src={require("../../assets/events/event2.png")} width="87%" className="gap" alt="Upcoming Events" />
            <Typography variant="h5" sx={{fontSize:"1rem", marginLeft:"14%"}} id="cta">LawxTechSeries4</Typography>
            <Typography variant="h6"  sx={{fontSize:"0.8rem", marginLeft:"14%"}} id="cta">23rd September 2023</Typography>
          </Grid>
          <Grid item maxWidth="sm">
            <img src={require("../../assets/events/event3.png")} width="87%" alt="Upcoming Events" />
            <Typography variant="h5"  sx={{fontSize:"1rem"}} id="cta">Partnership Announcementt</Typography>
            <Typography variant="h6" sx={{fontSize:"0.8rem", marginLeft:"17%"}} className="gap">21st  September 2023</Typography>
          </Grid>
        </Grid>
      </div>
      <div>
        <Box maxWidth="xl" className="btn"  height={320} marginTop="10%" sx={{ display:"flex"}}>
          <Box maxWidth="sm" marginTop={6} marginLeft={14}>
              <Typography  variant="h4" color="#ffffff" sx={{fontSize:"1.8rem"}}  marginTop={2} fontWeight="normal" marginX="auto" gutterBottom>
                Join us at Law x Tech as a VOLUNTEER
              </Typography>
              <Typography variant="h6" color="#ffffff" sx={{fontSize:".9rem"}} fontWeight="light" paragraph>
                Do you have tech skills such as graphics designing, web development,
                community management, copy writing, project management and the likes?
                Are you interested in gaining hands on experience working on real life
                projects with us? Then, join us today!
              </Typography>
              <Typography variant="h6" color="#ffffff" sx={{fontSize:".9rem"}} fontWeight="light" paragraph>
                Are you interested in gaining hands on experience working on real life
                projects with us? Then, join us today!
              </Typography>
          </Box>
          <Box maxWidth="sm" marginTop={10} marginLeft={40}>
            <Typography variant="h6" color="#ffffff" sx={{fontSize:"0.9rem"}} fontWeight="light" paragraph>
              To be a Volunteer
            </Typography>
            <Typography variant="h6" color="#ffffff" sx={{fontSize:"0.9rem", marginTop:"-6%"}} fontWeight="light" paragraph>
              Join our Comuunity
            </Typography>
            <Typography variant="h6" color="#ffffff" sx={{fontSize:"0.9rem", marginTop:"-6%"}} fontWeight="normal" paragraph gutterBottom>
              Follow us on all social media platform
            </Typography>
            <Typography variant="h6" color="#ffffff" sx={{fontSize:"0.8rem"}} fontWeight="light" paragraph>
              Fill the Volunteer form to Apply!
            </Typography>
          </Box>
      </Box>
      </div>
    </>
  );
};