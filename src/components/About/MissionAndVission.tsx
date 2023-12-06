import { Container } from "@mui/material";

const MIssionAndVission = () => {
  return (
    <>
      <section
        className="py-[5rem] px-[1.5rem] lg:py-[7.38rem] lg:px-[4.38rem] bg-[#113167] text-white"
        id="mission"
      >
        <Container maxWidth="lg">
          <div>
            <div>
              <h2 className="text-[2rem] lg:text-[2.8rem] font-bold ">
                Our Mission
              </h2>
              <p className="text-[0.875rem] font-[500] md:text-[1rem] leading-[1.7rem] text-justify text-white mt-[1rem]">
                At LawxTech, our mission is to bridge the gap between the worlds
                of law and technology, providing a dynamic platform where
                lawyers and law students can explore, learn, and thrive in the
                ever-evolving landscape of legal tech and/or just tech. Through
                insightful sessions, expert guidance, and collaborative
                networking, we empower our participants to embrace innovation,
                cultivate expertise, and pioneer positive change at the
                intersection of law and technology.
              </p>
            </div>
            <div className="mt-[3rem] md:mt-[4rem]">
              <h2 className="text-[2.3rem] lg:text-[2.8rem] font-bold ">
                Our Vision
              </h2>
              <p className="text-[0.875rem] font-[500] md:text-[1rem] leading-[1.7rem] text-justify text-white mt-[1rem]">
                Our vision is to pioneer a transformed legal profession by
                empowering legal minds with the skills to navigate technology.
                We envision tech-savvy lawyers who integrate innovation and
                drive impact, shaping a collaborative future in law and tech for
                lawyers and/or law students whether rooted in law or aspiring to
                transition to tech, with LawxTech series as the catalyst.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MIssionAndVission;
