import React from 'react'
import { Banner } from "../components/Home/Banner";
import { Intro } from '../components/Home/Intro';

const Home: React.FC = () => {


  return (
    <>
      <Banner />
      <section>
        <Intro />
      </section>
    </>
  )
}

export default Home