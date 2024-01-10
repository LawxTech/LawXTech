import React, { useState } from "react";
// import "./Accordion.css"; // Import your styles here

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="min-h-[60vh] py-10 w-full flex flex-col-reverse md:flex-row items-center ">
      <div
        data-aos="fade-right"
        className="w-full md:w-3/4 mx-auto rounded-2xl overflow-hidden border"
      >
        <div className="bg-white p-10 shadow-sm">
          <h3 data-aos="fade-up" className="text-lg font-medium text-gray-800">
            Frequently Asked Questions
          </h3>
          <p
            data-aos="fade-down"
            className="text-sm font-light text-gray-600 my-3"
          >
            The accordion contains helpful information about our services. Click
            on a question to view the answer. If you have any other questions,
            please feel free to contact us.
          </p>

          <div className="h-1 w-full mx-auto border-b my-5"></div>

          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="transition hover:bg-indigo-50">
              {/* Header */}
              <div
                className={`accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16 ${
                  openIndex === index ? "bg-indigo-100 " : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <i
                  className={`fas ${
                    openIndex === index ? "fa-minus" : "fa-plus"
                  }`}
                ></i>
                <h3
                  // data-aos="fade-up"
                  // data-aos-delay={index * 100}
                  className={`${
                    openIndex === index ? "text-[#113167] font-[500] " : ""
                  }`}
                >{`Accordion Item ${index}`}</h3>
              </div>
              {/* Content */}
              <div
                className="accordion-content px-8 pt-0 overflow-hidden"
                style={{ maxHeight: openIndex === index ? "1000px" : "0px" }}
              >
                <div className="py-3 mb-3">
                  <p
                    data-aos="fade-down"
                    className="leading-6 font-light text-justify"
                  >
                    The accordion is a graphical control element comprising a
                    vertically stacked list of items such as labels or
                    thumbnails. The accordion is a graphical control element
                    comprising a vertically stacked list of items such as labels
                    or thumbnails.
                  </p>
                  <button
                    data-aos="fade-down"
                    // data-aos-delay={100}
                    className="rounded-[0.35rem] bg-[#113167] text-white font-medium font-lg px-6 py-2 mt-3"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="w-1/4 flex items-center justify-center "
      >
        <div className="md:-rotate-90 ">
          <span className="font-[800] text-[2rem] lg:text-[9rem] bg-indigo-50 text-[#113167] border border-[#113167] rounded-2xl py-4 px-4 ">
            FAQ's
          </span>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
