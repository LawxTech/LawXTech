import { Container } from "@mui/material";
import React from "react";

const OurStory: React.FC = () => {
  return (
    <div>
      <section
        className="py-[5rem] px-[1.5rem] lg:py-[7.38rem] lg:px-[4.38rem] "
        id="ourStory"
      >
        <Container maxWidth="lg">
          <div>
            <h2
              data-aos="fade-left"
              className="text-[2rem] lg:text-[2.8rem] font-bold "
            >
              Our Story
            </h2>
            <p
              data-aos="fade-up"
              className="text-[0.875rem] font-[500] md:text-[1rem] leading-[1.7rem] text-justify mt-[1rem]"
            >
              Law x Tech launched in 2023 to pioneer a new work model that helps
              legal professionals find more flexibility and connect the legal
              spectrum to technology for more opportunities. We understand that
              the faculties of law and law school in Nigeria do not equip
              students with knowledge of technology and how they, as lawyers,
              can find a balance in these two industries. There is a lack of
              awareness and understanding among lawyers about the potential
              opportunities and challenges that come with a tech-centric
              approach to law. The legal landscape is diverse, with one of its
              emerging areas being Tech Law or Legal Technology. We have taken
              the responsibility to arm this next generation of professionals
              with the tools they need to thrive in the new internet economy.
            </p>
            <p
              data-aos="fade-up"
              className="text-[0.875rem] font-[500] md:text-[1rem] text-justify leading-[1.7rem] mt-[1.5rem]"
            >
              We hope to pioneer a transformed legal profession by empowering
              legal minds with the skills to navigate technology. We envision
              tech-savvy lawyers who integrate innovation and drive impact,
              shaping a collaborative future in law and tech for lawyers and/or
              law students whether rooted in law or aspiring to transition to
              tech, with Law x Tech Community as the catalyst.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default OurStory;
