import { Typography, Grid, Box, Container } from "@mui/material";
import PropTypes from "prop-types";
import { withStyles } from "@mui/material"; 
// import GridList from "@mui/core/GridList";
// import GridListTile from "@mui/core/GridListTile";
import "../.../../../App.css"

export const Intro = () => {
    return(
        <>
            <div>
                <Container maxWidth="md">
                    <Typography variant="h4" align="center" color="#133167" fontWeight="bold" sx={{fontSize:"1.8rem"}} mt={0}>
                        Be a Part of a Fast Growing Community
                    </Typography>
                    <Typography variant="h6" align="center" color="#133167" sx={{fontSize:"1.1rem"}} fontWeight="light" paragraph>
                        We have an impact on the careers of a number of law professionals.
                    </Typography>
                    <Grid container maxWidth="xl" spacing={2} sx={{ justifyContent:"center", alignItems:"center" }}>
                        <Grid item marginTop={2}>
                            <Box component="img" maxWidth="md"
                                alt="Hero image"
                                width="98%"
                                src={ require("../../assets/slack.png")}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Box maxWidth="xl" className="btn spacer" marginTop="-11.4%" height={300}>
                    <Box maxWidth="sm" alignContent="center" className="mid">
                        <Typography  variant="h6"  align="center" color="#ffffff" sx={{fontSize:"1.2rem"}} fontWeight="normal" marginX="auto" paragraph>
                            “I want to talk regularly to lawyers who want to learn more
                            about tech because i want to combine law and tech.”
                        </Typography>
                        <Typography variant="h6" color="#ffffff" sx={{fontSize:"0.8rem"}} fontWeight="light" paragraph marginX={26}>
                            -- Osho Temi
                        </Typography>
                    </Box>
                </Box>
            </div>

        </>
    )
}