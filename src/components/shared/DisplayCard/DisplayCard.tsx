import React from "react";
import { Link } from "react-router-dom";

type Props = {
  display: {
    title: string;
    episode?: string;
    description?: string;
    duration: string;
    date: string;
    article: {
      p: string;
    }[];
    link: string;
    image: string;
    tags?: string[];
  };
};

const DisplayCard = ({ display }: Props) => {
  return (
    <>
      <Link to={display.link}>
        <div
          className={`border hover:border-[#113167] hover:cursor-pointer rounded-xl w-full items-center flex flex-col  `}
        >
          <div
            className={`w-full rounded-t-xl h-[16rem] bg-transparent flex items-center justify-center `}
          >
            <img
              src={display.image}
              className="object-cover w-full h-full rounded-t-xl"
              alt={display.title}
            />
          </div>
          <div className={` w-full rounded-b-xl min-h-[14rem] p-4  `}>
            <div className="mb-1 flex justify-between ">
              <p className="text-[0.75rem] ">LawxTech</p>
            </div>
            <h1
              className={` text-xl md:text-[1.4rem] mb-2 font-[500] text-[#000]  line-clamp-3`}
            >
              {display.title}
            </h1>
            <p className="mb-1 sm:mb-2 line-clamp-2 !text- text-[0.85rem] text-neutral-600  ">
              {display.article[0].p}
            </p>
            <div className="mt-3 flex items-center space-x-2 text-neutral-500 font-[400] text-[0.9rem]  ">
              <span className="text-sm ">{display.date}</span>
              <span className="text-sm ">.</span>
              <span className="text-sm">{display?.duration}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DisplayCard;
