import { Container } from "@mui/material";
import React from "react";
import FAQ from "../components/Contact/FAQ/Faq";
import Form from "../components/Contact/Form";
import Info from "../components/Contact/Info";

const Contact: React.FC = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <section className=" mt-[1rem] px-[1rem] sm:px-0 md:my-[1rem] ">
          <div data-aos="fade-right" className="flex ">
            <h1 className="text-[2rem] md:text-[3rem] text-[#113167] font-[700] ">
              Contact Us
            </h1>
          </div>
        </section>
        <section className="px-[1rem] md:px-0 mb-[5rem] flex flex-col-reverse md:flex-row-reverse items-center md:gap-x-8 ">
          <div
            data-aos="fade-right"
            className="w-full md:w-1/2 lg:w-1/3 bg-[#113167] text-white p-[2rem] rounded-xl "
          >
            <Info />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 py-[2rem] md:py-[5rem] md:px-6 ">
            <Form />
          </div>
        </section>

        <section className="px-[1rem] sm:px-0 md:my-[1rem] ">
          <FAQ />
        </section>
      </Container>
    </div>
  );
};

export default Contact;
