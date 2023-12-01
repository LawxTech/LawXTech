import { Container } from "@mui/material";
import React from "react";

const Founder: React.FC = () => {
  return (
    <div>
      <section className="py-[5rem] px-[1.5rem] lg:px-[4.38rem] bg-[#F5F5F5] ">
        <Container maxWidth="lg" className="grid grid-cols-2 gap-[1.5rem] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.5rem]">
            <div className="rounded-[1rem] border border-[#113167] w-[30rem] h-[30rem] mx-auto ">
              <img
                src="/images/sopuruchi.jpeg"
                alt="about the founder"
                className="w-full h-full rounded-[1rem] object-cover object-center"
              />
            </div>
            <div>
              <h3 className="text-[#113167] text-[2rem] lg:text-[2.6rem] font-bold mt-[1rem] ">
                About our Founder
              </h3>
              <div className=" md:w-2/3 mx-auto lg:max-w-[28rem] grid gap-[0.875remrem] ">
                <p className="text-[1rem] text-justify font-[400] leading-[1.8rem] ">
                  Meet Sopuruchi Rufus, the driving force behind Law x Tech.
                  With a dynamic blend of legal expertise and technological
                  innovation, being a product manager herself, she has set the
                  course for our organization’s exceptional journey.
                </p>
                <p className="text-[1rem] text-justify font-[400] leading-[1.8rem] ">
                  In a world increasingly shaped by technology, Sopuruchi Rufus
                  recognized the transformative power of innovation early on.
                  Her passion for technology and its potential to revolutionize
                  the legal industry has driven Law x Tech to the forefront of
                  the legal-tech realm.
                </p>
                <p className="text-[1rem] text-justify font-[400] leading-[1.8rem] ">
                  Her dedication to merging the worlds of law and technology has
                  empowered Law x Tech to provide opportunities to law
                  professionals to acquire tech skills.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Founder;
