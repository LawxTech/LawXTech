import React from "react";
import { Typography, Container, Box } from "@mui/material";
import Button from "@mui/material/Button";
import "../.../../../App.css";
import { Link } from "react-router-dom";


export const SpeakerAd = () => {
    return(
        <>
            <div>
                <Container maxWidth="md" sx={{ display:"flex"}} className="ad">
                    <Box maxWidth="sm" marginTop={20} marginRight={1}>
                        <Typography variant="h4" className="adText" sx={{fontSize:"1.8rem"}} marginTop={2} fontWeight="normal" marginX="auto" gutterBottom>
                            Become a Speaker at the Law x Tech Series
                        </Typography>
                        <Typography variant="h6" sx={{fontSize:".9rem"}} paragraph>
                            Are you passionate about the intersection of law and technology?
                            Do you have insights and experiences that can inspire and
                            educate others in this rapidly evolving field? If so, we invite
                            you to become a featured speaker at the monthly Law x Tech
                            Series webinar!
                        </Typography>
                        <div className="join">
                            <Link to="https://forms.gle/NFD7ex8vRV1YKZV39" target="_blank">
                                <Button className="btn" 
                                    variant="contained"
                                    size="large"
                                >
                                    Become a Speaker Today
                                </Button>
                            </Link>
                        </div>
                    </Box>
                    <Box maxWidth="md" marginLeft={12}>
                        <img src={require("../../assets/speaker.png")} alt="Speaker" className="adImg" />
                    </Box>
                </Container>
            </div>
        </>
    )
}