import React from "react";
import { Banner } from "../components/Home/Banner";
import { Features } from "../components/Home/Features";
import { Events } from "../components/Home/Events";
import SpeakerAd from "../components/Home/SpeakerAd";
import { Testimonials } from "../components/Home/Testimonials";

const Home: React.FC = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <Features />
      </section>
      <section>
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
