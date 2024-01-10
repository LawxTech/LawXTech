import React from "react";
import { Banner } from "../components/Home/Banner";
import { Features } from "../components/Home/Features";
import { Events } from "../components/Home/Events";
import SpeakerAd from "../components/Home/SpeakerAd";
import { Testimonials } from "../components/Home/Testimonials";
import Reviews from "../components/Home/Reviews";

const Home: React.FC = () => {
  const reviews = [
    {
      name: "Favour Williams",
      techRole: "Software Engineer",
      relation:
        "I found this blog immensely helpful for staying tech-savvy and learning programming techniques.",
      rating: 6,
    },
    {
      name: "Jane Smith",
      techRole: "UI/UX Designer",
      relation:
        "A must-read blog for tech beginners, offering invaluable insights and practical advice.",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      techRole: "Data Scientist",
      relation:
        "This blog has transformed my tech skills with its informative articles and actionable tips.",
      rating: 7,
    },
    {
      name: "Sarah Thompson",
      techRole: "Cybersecurity Analyst",
      relation:
        "An essential resource for tech enthusiasts, providing valuable guidance and continuous learning opportunities.",
      rating: 6,
    },
    {
      name: "Alex Ramirez",
      techRole: "Network Engineer",
      relation:
        "This blog is a game-changer, enhancing my tech journey with its informative articles and helpful advice.",
      rating: 7,
    },
    {
      name: "Emily Wilson",
      techRole: "IT Project Manager",
      relation:
        "If you're passionate about tech, this blog is a treasure trove of knowledge and tips to fuel your growth.",
      rating: 4,
    },
  ];
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
        <Reviews reviews={reviews} />
        {/* <Testimonials /> */}
      </section>
    </div>
  );
};

export default Home;
