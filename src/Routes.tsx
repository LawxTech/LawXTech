import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Series from "./pages/Series";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Blog from "./components/Blog/Blog";

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/LawXTech" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/series" element={<Series />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:blogId" element={<Blog />} />
      <Route path="/contact-us" element={<Contact />} />
    </ReactRoutes>
  );
};

export default Routes;
