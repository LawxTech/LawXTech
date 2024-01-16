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

const Info = ({ selectedBlog }: Props) => {
  return (
    <>
      <div className="mt-4">
        {/* <hr className="mt-4 mb-4" /> */}
        <div className="flex justify-between pb-2 text-[#646464] ">
          <p className="font-raleway font-normal text-sm">
            {selectedBlog?.duration}
          </p>
          <p className="font-raleway font-normal text-sm">
            {selectedBlog?.date}
          </p>
        </div>
        <hr className="mb-3" />
      </div>
    </>
  );
};

export default Info;
