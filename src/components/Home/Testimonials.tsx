import React, { useEffect } from "react";
import { Typography, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from "@mdi/react";
import { mdiFormatQuoteOpen } from "@mdi/js";

export const Testimonials: React.FC = () => {
  useEffect(() => {
    if (window.location.hash === "#testimony") {
      document.getElementById("testimony")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  const slidesToShow =
    window.innerWidth > 600 ? (window.innerWidth > 800 ? 3 : 2) : 1;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <section className="py-[6rem] grid grid-cols-1 items-center bg-neutral-100 ">
        <Container maxWidth="lg">
          <h6 className="text-[#133167] font-[700] text-[1.6rem] mb-6 text-center">
            Testimonials
          </h6>
          <Slider {...settings}>
            {Array.from(Array(6).keys()).map((item, index) => (
              <div
                className="p-6 grid items-center gap-[1rem] bg-white rounded-lg shadow-lg border border-[#133167] witnessbox "
                key={index}
                id="testimony"
              >
                <Icon
                  path={mdiFormatQuoteOpen}
                  size={1.8}
                  className="witness"
                />
                <Typography
                  variant="h6"
                  sx={{ fontSize: ".9rem", width: "95%", marginTop: "3%" }}
                  fontWeight="normal"
                  paragraph
                >
                  I am very proud to say that after a few months of being in
                  this community and attending these Law x Tech series, i have
                  learnt how to code.
                </Typography>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border flex justify-center items-center "></div>
                  <div>
                    <h6 className="text-[.9rem] font-[600]">Shelly A.</h6>
                    <p className="text-[.75rem] font-[400]">Paralegal</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    </>
  );
};
