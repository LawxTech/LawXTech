import React from "react";
import { Banner } from "../components/Home/Banner";
import { Intro } from "../components/Home/Intro";
import { Features } from "../components/Home/Features";
import { Events } from "../components/Home/Events";
import { SpeakerAd } from "../components/Home/SpeakerAd";
import { Testimonials } from "../components/Home/Testimonials";

const Home: React.FC = () => {
  return (
    <div>
      <section className="mt-12 min-h-[70vh] ">
        <Banner />
      </section>
      {/* <section>
        <Intro />
      </section> */}
      <section>
        <Features />
      </section>
      <section className="spacing">
        <Events />
      </section>
      <section>
        <SpeakerAd />
      </section>
      <section>
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
