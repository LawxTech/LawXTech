import React from "react";
import { Box, Container } from "@mui/material";
import "../.../../../App.css";

interface FeatureBoxProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({
  src,
  alt,
  title,
  description,
}) => {
  return (
    <>
      <div className="h-48 w-full p-5 bg-[#E7EBF0] cursor-pointer shadow-sm rounded-md ">
        <img src={src} alt={alt} className="h-12 w-12 rounded-md " />
        <h4 className="text-[1.2rem] font-[500] mt-4 ">{title}</h4>
        <p className="text-[0.87rem] ">{description}</p>
      </div>
    </>
  );
};

export default FeatureBox;

const benefits = [
  {
    id: 1,
    title: "Learning Resources",
    description: "We share resources to help you grow in your learning",
    src: require("../../assets/icons/learning.png"),
    alt: "Learning Resources",
  },
  {
    id: 2,
    title: "Workshop",
    description: "We share resources to help you grow in your learning",
    src: require("../../assets/icons/webinar.png"),
    alt: "Workshop",
  },
  {
    id: 3,
    title: "Mentorship Sessions",
    description: "We share resources to help you grow in your learning",
    src: require("../../assets/icons/Mentorship.png"),
    alt: "Mentorship Sessions",
  },
  {
    id: 4,
    title: "Internship",
    description: "We share resources to help you grow in your learning",
    src: require("../../assets/icons/internship.png"),
    alt: "Internship",
  },
];

export const Features = () => {
  return (
    <>
      <Container maxWidth="lg">
        <div className="py-12 ">
          <h4 className="text-[#133167] font-[600] text-[1.4rem] md:text-[1.8rem] my-6 md:text-center ">
            Why Join Our Community?
          </h4>
          <div className="flex flex-row overflow-y-auto md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Box maxWidth="sm" key={benefit.src}>
                <FeatureBox
                  src={benefit.src}
                  alt={benefit.alt}
                  title={benefit.title}
                  description={benefit.description}
                />
              </Box>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
