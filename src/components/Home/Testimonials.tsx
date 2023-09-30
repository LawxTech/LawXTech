import { Typography, Container, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from '@mdi/react';
import { mdiFormatQuoteOpen } from '@mdi/js';


export const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
      };

      const isSmallDevice = window.matchMedia("(max-width: 768px)").matches;
      const isMediumDevice = window.matchMedia("(max-width: 991px)").matches;

      if (isSmallDevice) {
        settings.slidesToShow = 1;
      } else if (isMediumDevice) {
        settings.slidesToShow = 2;
      } else {
        settings.slidesToShow = 3;
      }
    return(
        <>
            <section className="testimonials">
                    <Container maxWidth="xl">
                        <Typography
                            variant="h6"
                            align="center"
                            sx={{
                            color: "#133167",
                            fontWeight: "bold",
                            fontSize: "1.8rem",
                            marginTop: 6,
                            marginBottom: 4,
                            }}
                        >
                            Testimonials
                        </Typography>
                    </Container>
                    <Slider {...settings}>
                        <Box maxHeight={900} maxWidth="xl" sx={{backgroundColor:"#ffffff", marginBottom:"10%", marginLeft:"10%" }} className="gap witnessbox">
                            <Icon path={mdiFormatQuoteOpen} size={1.8} className="witness" />
                            <Typography variant="h6" sx={{ fontSize:".9rem", width:"95%", marginTop:"3%"}} fontWeight="normal" paragraph>
                                I am very proud to say that after a few months of
                                being in this community and attending these Law
                                x Tech series, i have learnt how to code.
                            </Typography>
                            <Box maxWidth="xl" sx={{ display:"flex", justifyContent:"center"}} className="up">
                                <Box>
                                    <img src={require("../../assets/witness.png")} width={34} alt="Reviewer" style={{ marginLeft: '-10em' }} />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontSize:".9rem", marginLeft:"-8em" }} fontWeight="bold" paragraph>
                                        Shelly A.
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontSize:".75rem", marginTop:"-22px", marginLeft:"-9.4em" }} fontWeight="light" paragraph>
                                        Paralegal
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box maxHeight={900} sx={{backgroundColor:"#ffffff", marginBottom:"10%" }} className="gap witnessbox">
                            <Icon path={mdiFormatQuoteOpen} size={1.8} />
                            <Typography variant="h6" sx={{ fontSize:".9rem", width:"95%", marginTop:"3%"}} fontWeight="normal" paragraph>
                                I am very proud to say that after a few months of
                                being in this community and attending these Law
                                x Tech series, i have learnt how to code.
                            </Typography>
                            <Box maxWidth="xl" sx={{ display:"flex", justifyContent:"center"}} className="up">
                                <Box>
                                    <img src={require("../../assets/witness.png")} width={34} alt="Reviewer" style={{ marginLeft: '-10em' }}  />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontSize:".9rem", marginLeft:"-8em" }} fontWeight="bold" paragraph>
                                        Shelly A.
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontSize:".75rem", marginTop:"-22px", marginLeft:"-9.4em" }} fontWeight="light" paragraph>
                                        Paralegal
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box maxHeight={900} sx={{backgroundColor:"#ffffff", marginBottom:"10%" }} className="gap witnessbox">
                            <Icon path={mdiFormatQuoteOpen} size={1.8} />
                            <Typography variant="h6" sx={{ fontSize:".9rem", width:"95%", marginTop:"3%"}} fontWeight="normal" paragraph>
                                I am very proud to say that after a few months of
                                being in this community and attending these Law
                                x Tech series, i have learnt how to code.
                            </Typography>
                            <Box maxWidth="xl" sx={{ display:"flex", justifyContent:"center"}} className="up">
                                <Box>
                                    <img src={require("../../assets/witness.png")} width={34} alt="Reviewer" style={{ marginLeft: '-10em' }}  />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontSize:".9rem", marginLeft:"-8em" }} fontWeight="bold" paragraph>
                                        Shelly A.
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontSize:".75rem", marginTop:"-22px", marginLeft:"-9.4em" }} fontWeight="light" paragraph>
                                        Paralegal
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box maxHeight={900} sx={{backgroundColor:"#ffffff", marginBottom:"10%", marginLeft:"10%" }} className="gap witnessbox">
                            <Icon path={mdiFormatQuoteOpen} size={1.8} />
                            <Typography variant="h6" sx={{ fontSize:".9rem", width:"95%", marginTop:"3%"}} fontWeight="normal" paragraph>
                                I am very proud to say that after a few months of
                                being in this community and attending these Law
                                x Tech series, i have learnt how to code.
                            </Typography>
                            <Box maxWidth="xl" sx={{ display:"flex", justifyContent:"center"}} className="up">
                                <Box>
                                    <img src={require("../../assets/witness.png")} width={34} alt="Reviewer" style={{ marginLeft: '-10em' }}  />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontSize:".9rem", marginLeft:"-8em" }} fontWeight="bold" paragraph>
                                        Shelly A.
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontSize:".75rem", marginTop:"-22px", marginLeft:"-9.4em" }} fontWeight="light" paragraph>
                                        Paralegal
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box maxHeight={900} sx={{backgroundColor:"#ffffff", marginBottom:"10%", marginLeft:"10%" }} className="gap witnessbox">
                            <Icon path={mdiFormatQuoteOpen} size={1.8} />
                            <Typography variant="h6" sx={{ fontSize:".9rem", width:"95%", marginTop:"3%"}} fontWeight="normal" paragraph>
                                I am very proud to say that after a few months of
                                being in this community and attending these Law
                                x Tech series, i have learnt how to code.
                            </Typography>
                            <Box maxWidth="xl" sx={{ display:"flex", justifyContent:"center"}} className="up">
                                <Box>
                                    <img src={require("../../assets/witness.png")} width={34} alt="Reviewer" style={{ marginLeft: '-10em' }}  />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontSize:".9rem", marginLeft:"-8em" }} fontWeight="bold" paragraph>
                                        Shelly A.
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontSize:".75rem", marginTop:"-22px", marginLeft:"-9.4em" }} fontWeight="light" paragraph>
                                        Paralegal
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Slider>
           
            </section>
        </>
    )
}