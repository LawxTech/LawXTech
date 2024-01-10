import React, { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";
import { Container } from "@mui/material";

type Props = {
  reviews: Review[];
};

type Review = {
  name: string;
  techRole: string;
  relation: string;
};

function ReviewComponent({ reviews }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    scrollToIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [reviews.length]);

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const card = sliderRef.current.children[index] as HTMLElement;
      sliderRef.current.scrollTop = card.offsetTop;
    }
  };

  return (
    <div className="bg-neutral-100">
      <Container>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-6 place-content-center min-h-[70vh] mt-8 py-10 sm:py-0">
          <div data-aos="fade-right" className="grid md:place-items-center">
            <h4 className="text-5xl sm:text-[6.5rem] font-[800] text-[#113167] ">
              Our <br />
              Reviews!
            </h4>
          </div>
          <div data-aos="fade-left" className="relative overflow-hidden ">
            <div
              ref={sliderRef}
              className=" md:pl-2 md:pr-10 h-[23rem] overflow-hidden"
              style={{ scrollSnapType: "y mandatory", scrollbarWidth: "none" }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`w-full lg:w-[30rem] p-5 sm:p-8 mb-6 bg-white drop-shadow-lg rounded-xl border dark:border-neutral-700 hover:border-black group grid grid-cols-1 gap-y-6 transition-transform duration-500 ease-in-out transform `}
                  style={{ height: "22rem" }}
                >
                  <div className="flex justify-end">
                    <h1 className="font-sans font-[700] text-7xl text-black ">
                      0{index + 1}
                    </h1>
                  </div>
                  <p className="font-raleway text-sm sm:text-sm lg:text-base !leading-6 md:!leading-7 text-[#646464]">
                    {review.relation}
                  </p>

                  <div className="flex items-center lg:items-start space-x-3 lg:space-x-4">
                    <img
                      src={`/images/ruchi-rufus.jpeg`}
                      className="w-[50px] h-[50px] rounded-full border-2 border-[#113167]"
                      alt=""
                    />
                    <div>
                      <p className="font-raleway font-medium text-xl line-clamp-1 dark:text-neutral-500">
                        {review.name}
                      </p>
                      <span className="font-raleway text-xs sm:text-sm mt-2 dark:text-neutral-600">
                        {review.techRole}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className=" absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full bg-black ${
                  index === currentIndex ? "opacity-100" : "opacity-50"
                } cursor-pointer`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ReviewComponent;
