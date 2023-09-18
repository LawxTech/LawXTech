import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import { ThemeProvider } from '@mui/system';
import { Theme } from "@mui/material/styles";
import theme from "../../styles/theme";
import { Button } from "../Button";
import "../.../../../App.css"

  

export const Banner = () => {
    const redirectToGoogle = () => {
        window.location.href = 'https://www.google.com'
      };


    return(
        <ThemeProvider theme = {theme}> 
            <div className="banner">
                <Container maxWidth="xl" sx={{ display: 'flex' }}>
                    <div>
                        <Typography variant="h1" align="justify" color="#ffffff" fontWeight="bold" fontSize="xl" pt="4rem" px={4} ml={4}>Where&nbsp;
                            <span>
                                <Typography display="inline" fontWeight="bold" fontStyle="oblique" fontSize="xl" variant="h1" color="#42858C">
                                    Law
                                </Typography>
                            </span>
                        </Typography>
                        <Typography variant="h1" align="justify" color="#ffffff" fontWeight="bold" fontSize="xl" ml={4} px={4}>Meets Tech.</Typography>
                        <Typography variant="h4" align="justify" color="#ffffff" fontWeight="normal" ml={4} px={4}  paragraph>Empowering lawyers in the tech world</Typography>
                            <div id="cta">
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Button
                                            type="primary"
                                            onClick={redirectToGoogle}
                                            > 
                                            Join Community
                                        </Button>
                                    </Grid>
                                </Grid>
                            
                            </div>
                    </div>
                    <div className="heroImg"></div>
                </Container>
            </div>
        </ThemeProvider>
    )
}