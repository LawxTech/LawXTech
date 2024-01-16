import React from "react";

type Props = {};

const Author = (props: Props) => {
  return (
    <>
      <div className="min-h-[70vh] bg-[#f7f7f7] w-full mt-10">
        <div className="py-10 md:container w-full sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto px-8 xs:px-0">
          <div className="sm:flex items-center justify-between ">
            <div className="left mb-3 sm:mb-0">
              <div className=" flex items-center ">
                <img
                  src={`/images/ruchi-rufus.jpeg`}
                  className="w-[3rem] h-[3rem] rounded-[3rem] "
                  alt="An SVG illustration of a person dressed in different clothings"
                />
              </div>
              <div className="writer mt-3">
                <h2 className="font-[500] text-2xl ">Toluwalope Akinkunmi</h2>
                <p className="text-sm mt-1">
                  2.7k Followers | Senior software developer{" "}
                </p>
                <p className="text-sm mt-2">
                  Senior software developer at{" "}
                  <span className="font-semibold">Gen-Z Tales</span>
                </p>
              </div>
            </div>
            <div className="right flex items-center sm:justify-end space-x-3">
              <button className="py-2 px-4 text-sm md:text-base rounded-full bg-[#d6d6d6] hover:bg-neutral-600 hover:text-neutral-300 dark:bg-neutral-700">
                Follow
              </button>
              <button className="left flex items-center justify-center h-10 w-10 rounded-[50%] text-black dark:text-neutral-600 hover:bg-neutral-600 hover:text-neutral-300 border dark:border-neutral-800 cursor-pointer bg-[#d6d6d6] dark:hover:bg-neutral-800  dark:hover:text-black">
                <i className="fas fa-envelope fa-lg fa-fw"></i>
              </button>
            </div>
          </div>

          <hr className="mt-6 mb-4 dark:border-neutral-700" />
        </div>
      </div>
    </>
  );
};

export default Author;
