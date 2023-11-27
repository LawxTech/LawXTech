import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const navItems = ["Home", "About Us", "Series", "Contact Us"];

export default function DrawerAppBar() {
  const [activeItem, setActiveItem] = React.useState(navItems[0]);
  const navigate = useNavigate();

  const slackLink =
    "https://join.slack.com/t/lawxtech/shared_invite/zt-20u7mvfqu-EWVec2Qip3XhYoUyVtyvpA";

  return (
    <div className=" px-[2rem] flex justify-between border ">
      <Link to="/">
        <img
          src={require("../assets/logo/logo_2.JPG")}
          alt="Logo"
          className="h-[80px] w-[80px]"
        />
      </Link>
      <div className="md:flex flex-end items-center space-x-8 hidden">
        <div className="flex items-center space-x-5">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveItem(item);
                navigate(
                  `/${
                    item === "Home"
                      ? "LawXTech"
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
                        backgroundColor: "#15994B",
                      }}
                    ></span>
                  )}
                </span>
              }
            </button>
          ))}{" "}
        </div>
        <div className="mr-[1em] ">
          <Button type="button" href={slackLink}>
            Join Community
          </Button>
        </div>
      </div>
    </div>
  );
}
