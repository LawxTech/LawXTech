import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface Props {
  text: string;
  href: string;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarLink: React.FC<Props> = ({ text, href, setOpenSideBar }) => {
  const path = useLocation().pathname;
  const isActive = path === href;

  return (
    <li className="mb-2 ">
      <Link
        to={href}
        onClick={() => setOpenSideBar(false)}
        className={`flex items-center group relative gap-6 h-12 px-4 rounded-xl text-[#113167] ${
          isActive && "!text-white bg-[#113167] font-bold"
        }`}
      >
        <p className={`font-[500] text-sm sm:text-base whitespace-nowrap `}>
          {text}
        </p>
      </Link>
    </li>
  );
};

export default SidebarLink;
