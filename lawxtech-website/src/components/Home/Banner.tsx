import { Typography, Grid, Box, Container} from "@mui/material";
import { ThemeProvider } from '@mui/system';
import theme from "../../styles/theme";
import Button from "@mui/material/Button";
import "../.../../../App.css"

  

export const Banner = () => {
    const redirectToGoogle = () => {
        window.location.href = 'https://www.google.com'
      };


    return(
        <ThemeProvider theme = {theme}> 
            <div className="banner">
                <Container maxWidth="xl" sx={{ display: 'flex', justifyContent:"space-between" }}>
                    <div>
                        <Typography variant="h3" letterSpacing={8} fontWeight="bold" sx={{fontSize:"2.5rem"}} pt="4rem" px={4} ml={4} mt={0}>
                            Empowering
                            <span>
                                <Typography variant="h3" letterSpacing={8} fontWeight="bold" sx={{fontSize:"2.5rem"}}>Lawyers in the</Typography> 
                            </span>
                        </Typography>
                        <Typography variant="h3" letterSpacing={8} color="#42858C" sx={{fontSize:"2.5rem"}}fontWeight="bold" fontStyle="oblique" ml={4} px={4} mb={2}>
                            Tech World
                        </Typography>
                        <Grid container maxWidth="md">
                            <Grid item maxWidth="md">
                                <Box maxWidth="sm">
                                    <Typography variant="h6" sx={{fontSize:"0.95rem"}} ml={4} px={4}  paragraph>
                                        Are you a lawyer looking to embrace the dynamic world of technology? 
                                        Or you are a techie seeking legal knowledge to boost your career? &nbsp; &nbsp; &nbsp; 
                                        Law x Tech is your gateway to a thriving career at the intersection of law and technology.
                                        This is where Law meets Tech.
                                    </Typography>
                                </Box>
                                <div id="cta">
                                    <Button className="btn"
                                        variant="contained"
                                        size="large"
                                        onClick={redirectToGoogle}
                                    >
                                        Join Community
                                    </Button>
                                </div>
                            </Grid>
                        </Grid> 
                    </div>
                    <div >
                        <Grid container maxWidth="sm">
                            <Grid item>
                                <Box component="img"
                                    alt="Hero image"
                                    src={ require("../../assets/hero.png")}
                                    width={400}
                                    height={300}
                                    mr={14}
                                    my={5}
                                />
                            </Grid>  
                        </Grid>
                    </div>
                </Container>
            </div>
        </ThemeProvider>
    )
}