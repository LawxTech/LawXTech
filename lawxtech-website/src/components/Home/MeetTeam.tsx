import React from "react";
import { Typography, Container, Box } from "@mui/material";
import "../.../../../App.css";

export const MeetTeam = () => {
    return(
        <>
            <div>
                <Typography  variant="h4" color="#133167" align="center" sx={{fontSize:"1.8rem"}}  marginTop={2} fontWeight="bold" marginX="auto" gutterBottom>
                    Meet the Team
                </Typography>
                <Container maxWidth="xl" sx={{ display:"flex", justifyContent:"center"}}>
                    <Box maxWidth="sm">
                        <img src={require("../../assets/team/1.png")} alt="Team member"/>
                        <Typography variant="h6" sx={{fontSize:".9rem"}} fontWeight="light" id="cta" paragraph>
                            Founder/CEO
                        </Typography>
                        <Typography variant="h5" sx={{fontSize:".9rem"}} fontWeight="bold" id="cta" marginTop={-3}>
                            Sopuruchi Rufus
                        </Typography>
                    </Box>
                    <Box maxWidth="sm">
                        <img src={require("../../assets/team/2.png")} alt="Team member" className="gap" />
                        <Typography variant="h6" sx={{fontSize:".9rem"}} fontWeight="light" id="cta" paragraph>
                            Founder/CEO
                        </Typography>
                        <Typography variant="h5" sx={{fontSize:".9rem"}} fontWeight="bold" id="cta" marginTop={-3}>
                            Sopuruchi Rufus
                        </Typography>
                    </Box>
                    <Box maxWidth="sm">
                        <img src={require("../../assets/team/3.png")} alt="Team member" className="gap" />
                        <Typography variant="h6" sx={{fontSize:".9rem"}} fontWeight="light" id="cta" paragraph>
                            Founder/CEO
                        </Typography>
                        <Typography variant="h5" sx={{fontSize:".9rem"}} fontWeight="bold" id="cta" marginTop={-3}>
                            Sopuruchi Rufus
                        </Typography>
                    </Box>
                    <Box maxWidth="sm">
                        <img src={require("../../assets/team/4.png")} alt="Team member" className="gap" />
                        <Typography variant="h6" sx={{fontSize:".9rem"}} fontWeight="light" id="cta" paragraph>
                            Founder/CEO
                        </Typography>
                        <Typography variant="h5" sx={{fontSize:".9rem"}} fontWeight="bold" id="cta" marginTop={-3}>
                            Sopuruchi Rufus
                        </Typography>
                    </Box>
                </Container>
            </div>
        </>
    )
}