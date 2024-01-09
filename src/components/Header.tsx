import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";

interface Props {
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setOpenSideBar }: Props) {
  const navItems = ["Home", "About Us", "Series", "Contact Us"];
  const [activeItem, setActiveItem] = React.useState(navItems[0]);
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <div className=" h-[4.5rem] lg:h-full sm:px-[2rem] flex items-center justify-between ">
        <div className="w-full flex justify-between items-center lg:hidden">
          <Link to="/" className="">
            <img
              src={"/assets/logo/logo_2.JPG"}
              alt="Logo"
              className="h-[80px] w-[80px]"
            />
          </Link>
          <button
            onClick={() => setOpenSideBar(true)}
            className="focus:outline-none mr-[1rem] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#113167]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                className="text-[#113167]"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <Link to="/" className="hidden lg:block">
          <img
            src={"/assets/logo/logo_2.JPG"}
            alt="Logo"
            className="h-[80px] w-[80px]"
          />
        </Link>
        <div className="md:flex flex-end items-center space-x-8 hidden">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveItem(item);
                  navigate(
                    `/${
                      item === "Home"
                        ? ""
                        : item.toLowerCase().replace(/\s+/g, "-")
                    }`
                  );
                }}
              >
                {
                  <span>
                    {item}
                    {item === activeItem && (
                      <span
                        style={{
                          content: '""',
                          display: "block",
                          width: "100%",
                          height: "0.15em",
                          marginTop: "0.08em",
                          backgroundColor: "#113167",
                          borderRadius: "0.5em",
                        }}
                      ></span>
                    )}
                  </span>
                }
              </button>
            ))}{" "}
          </div>
          <div className="mr-[1em] ">
            <Link
              to="https://forms.gle/P9jUJr3NaAGnS4Je6"
              target="_blank"
              className=" sm:text-center"
            >
              <Button
                className="btn !text-[0.75rem] "
                variant="contained"
                size="medium"
                sx={{
                  padding: ".75rem 1.5rem",
                }}
              >
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
