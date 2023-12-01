import React, { useEffect } from "react";
import SidebarLink from "./SidebarLink";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSidebar = ({ setOpenSideBar }: Props) => {
  const NavigationLinks = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "About",
      link: "/about-us",
    },
    {
      page: "Blogs",
      link: "/blogs",
    },
    {
      page: "Series",
      link: "/series",
    },
    {
      page: "Contact",
      link: "/contact-us",
    },
  ];
  const variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      //   dispatch(hideMobileSidebar());
    }
  };

  // Listen for window resize when sidebar is open
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup - remove event listener when sidebar is closed
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // Prevent the rest of the page from scrolling
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.1,
        },
      }}
      className="h-screen w-screen flex fixed top-0 left-0 z-50 bg-black bg-opacity-80"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        exit={{
          opacity: 0,
          x: -1000,
          transition: {
            duration: 0.3,
          },
        }}
        className="h-full w-[18rem] px-3 bg-white"
      >
        <div className={`h-[5.75rem] border-b flex items-center py-6 pl-3`}>
          <Link to="/">
            <img
              src={require("../../assets/logo/logo_2.JPG")}
              alt="Logo"
              className="h-[90px] w-[90px]"
            />
          </Link>
        </div>
        <div className="h-[calc(100%-5.375rem)] flex flex-col justify-between py-6">
          <ul className="mb-10">
            {NavigationLinks.map((item, index) => {
              return (
                <SidebarLink
                  key={index}
                  href={item.link}
                  text={item.page}
                  setOpenSideBar={setOpenSideBar}
                />
              );
            })}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileSidebar;
