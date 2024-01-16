import React from "react";

type selectedBlog = {
  title: string;
  duration: string;
  date: string;
  article: {
    p: string;
  }[];
  link: string;
  image: string;
};

type Props = {
  selectedBlog: selectedBlog;
};

const Header = ({ selectedBlog }: Props) => {
  return (
    <>
      <div className="h-[50vh] flex justify-center xxl:border dark:border-neutral-800 rounded-xl mt-0 mb-8">
        <img
          src={selectedBlog.image}
          className="object-cover w-full h-full rounded-lg "
          alt="An SVG illustration of a person dressed in different clothings"
        />
      </div>

      <div className="w-full text-black">
        <h1 className="font-raleway font-semibold text-[#113167] text-[1.75rem] sm:text-3xl md:text-4xl mt-4">
          {selectedBlog.title}
        </h1>
        <p className="font-raleway text-[#113167] text-sm sm:text-base mt-2">
          LawxTech
        </p>
      </div>
    </>
  );
};

export default Header;
