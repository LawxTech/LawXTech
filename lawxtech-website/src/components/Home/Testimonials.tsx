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
                        <Box height={208} sx={{backgroundColor:"#ffffff", marginBottom:"10%", marginLeft:"10%" }} className="gap witnessbox">
                            <Icon path={mdiFormatQuoteOpen} size={1.8} className="witness" />
                            <Typography variant="h6" sx={{ fontSize:".9rem", width:"95%", marginTop:"3%"}} fontWeight="normal" paragraph>
                                I am very proud to say that after a few months of
                                being in this community and attending these Law
                                x Tech series, i have learnt how to code.
                            </Typography>
                            <img src={require("../../assets/witness.png")} width="10%" alt="Reviewer" className="witness"/>
                        </Box>
                        <Box height={208} sx={{backgroundColor:"#ffffff", marginBottom:"10%" }} className="gap witnessbox">
                            <Icon path={mdiFormatQuoteOpen} size={1.8} />
                            <Typography variant="h6" sx={{ fontSize:".9rem", width:"95%", marginTop:"3%"}} fontWeight="normal" paragraph>
                                I am very proud to say that after a few months of
                                being in this community and attending these Law
                                x Tech series, i have learnt how to code.
                            </Typography>
                            <img src={require("../../assets/witness.png")} width="10%" alt="Reviewer" className="witness"/>
                        </Box>
                        <Box height={208} sx={{backgroundColor:"#ffffff", marginBottom:"10%" }} className="gap witnessbox">
                            <Icon path={mdiFormatQuoteOpen} size={1.8} />
                            <Typography variant="h6" sx={{ fontSize:".9rem", width:"95%", marginTop:"3%"}} fontWeight="normal" paragraph>
                                I am very proud to say that after a few months of
                                being in this community and attending these Law
                                x Tech series, i have learnt how to code.
                            </Typography>
                            <img src={require("../../assets/witness.png")} width="10%" alt="Reviewer" className="witness"/>
                        </Box>
                        <Box height={208} sx={{backgroundColor:"#ffffff", marginBottom:"10%", marginLeft:"10%" }} className="gap witnessbox">
                            <Icon path={mdiFormatQuoteOpen} size={1.8} />
                            <Typography variant="h6" sx={{ fontSize:".9rem", width:"95%", marginTop:"3%"}} fontWeight="normal" paragraph>
                                I am very proud to say that after a few months of
                                being in this community and attending these Law
                                x Tech series, i have learnt how to code.
                            </Typography>
                            <img src={require("../../assets/witness.png")} width="10%" alt="Reviewer" className="witness"/>
                        </Box>
                        <Box height={208} sx={{backgroundColor:"#ffffff", marginBottom:"10%", marginLeft:"10%" }} className="gap witnessbox">
                            <Icon path={mdiFormatQuoteOpen} size={1.8} />
                            <Typography variant="h6" sx={{ fontSize:".9rem", width:"95%", marginTop:"3%"}} fontWeight="normal" paragraph>
                                I am very proud to say that after a few months of
                                being in this community and attending these Law
                                x Tech series, i have learnt how to code.
                            </Typography>
                            <img src={require("../../assets/witness.png")} width="10%" alt="Reviewer" className="witness"/>
                        </Box>
                    </Slider>
           
            </section>
        </>
    )
}