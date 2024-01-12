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
          className={`border dark:border-neutral-700 rounded-xl w-full items-center flex flex-col hover:border-neutral-600  `}
        >
          <div
            className={`w-full rounded-t-xl h-[16rem] bg-transparent dark:bg-neutral-800/50 flex items-center justify-center `}
          >
            <img
              src={`/assets/images/placeholder_image.png`}
              className="object-cover w-full h-full rounded-xl"
              alt="An SVG illustration of a person dressed in different clothings"
            />
          </div>
          <div
            className={` w-full rounded-b-xl min-h-[14rem] py-6 px-4 dark:text-neutral-400 `}
          >
            <div className="mb-2 flex justify-between ">
              <p className="text-sm ">Toluwalope Akinkunmi</p>
            </div>
            <h1
              className={` text-xl md:text-[1.4rem] mb-2 font-[500] text-[#000] dark:text-neutral-200 line-clamp-2`}
            >
              {display.title}
            </h1>
            <p className="mb-1 sm:mb-2 line-clamp-3 !text- text-sm text-neutral-600  ">
              {display.description}
            </p>
            <div className="mt-3 flex items-center space-x-2 text-neutral-500 font-[400] font-sans ">
              <span className="text-sm ">{display.date}</span>
              <span className="text-sm ">.</span>
              <span className="text-sm">{display?.duration}</span>
              <span className="text-sm ">.</span>
              <p className="font-raleway font-normal text-sm text-neutral-600 flex items-center space-x-2">
                <i className="fa-solid fa-hands-clapping fa-md fa-fw"></i>
                <span>2</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DisplayCard;
