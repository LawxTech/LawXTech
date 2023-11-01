import { Link } from "react-router-dom";
import { Typography, Container, Box } from "@mui/material";
import "../.../../../App.css";

export const MeetTeam = () => { 
    return(
        <>
            <Box maxWidth="l">
                <Typography  variant="h4" color="#133167" align="center" sx={{fontSize:"1.8rem", marginTop:"4%", marginBottom:"4%"}}  marginTop={2} fontWeight="bold" marginX="auto" gutterBottom>
                    Meet the Team
                </Typography>
                <Container maxWidth="xl" sx={{ display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                    <Box maxWidth="sm">
                        <img src={require("../../assets/team/sopuruchi.jpeg")} alt="Team member" width={280} className="gap" />
                        <Typography variant="h6" sx={{fontSize:".9rem"}} fontWeight="light" id="cta" paragraph>
                            Founder/CEO
                        </Typography>
                        <Typography variant="h5" sx={{fontSize:".9rem"}} fontWeight="bold" id="cta" marginTop={-3}>
                            Sopuruchi Rufus
                        </Typography>
                    </Box>
                    <Box maxWidth="sm">
                        <img src={require("../../assets/team/michael.png")} alt="Team member" width={365} className="gap" />
                        <Typography variant="h6" sx={{fontSize:".9rem"}} fontWeight="light" id="cta" paragraph>
                            UI/UX Designer
                        </Typography>
                        <Typography variant="h5" sx={{fontSize:".9rem"}} fontWeight="bold" id="cta" marginTop={-3}>
                            Aniefiok_Michael
                        </Typography>
                    </Box>
                    <Box maxWidth="sm">
                        <img src={require("../../assets/team/joel.png")} alt="Team member" width={365} className="gap" />
                        <Typography variant="h6" sx={{fontSize:".9rem"}} fontWeight="light" id="cta" paragraph>
                            Graphics Designer
                        </Typography>
                        <Typography variant="h5" sx={{fontSize:".9rem"}} fontWeight="bold" id="cta" marginTop={-3}>
                            Joel
                        </Typography>
                    </Box>
                    <Box maxWidth="sm">
                        <img src={require("../../assets/team/vivian.jpeg")} alt="Team member" width={270} className="gap" />
                        <Typography variant="h6" sx={{fontSize:".9rem"}} fontWeight="light" id="cta" paragraph>
                            Writer
                        </Typography>
                        <Typography variant="h5" sx={{fontSize:".9rem"}} fontWeight="bold" id="cta" marginTop={-3}>
                            Vivian
                        </Typography>
                        <Link to="/about-us#team"
                        target="_self"
                           >
                            <Typography variant="h6" color="#133167"
                            sx={{fontSize:"0.8rem", textDecoration:"underline", float:"right", marginTop:"-10%" }} fontWeight="light" paragraph>
                                View All&gt;
                            </Typography>
                        </Link>
                    </Box>
                </Container>
            </Box>
        </>
    )
}