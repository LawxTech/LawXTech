import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

// interface Video {
//   id: string;
//   snippet: {
//     title: string;
//     description: string;
//     resourceId: {
//       videoId: string;
//     };
//   };
// }

const Series = () => {
  const [activeTab, setActiveTab] = useState("lawxtech-series");
  // const [videos, setVideos] = useState([]);

  const [isFebuaryUpcoming, setIsFebuaryUpcoming] = useState(false);
  const [isMarchUpcoming, setIsMarchUpcoming] = useState(false);

  const isUpcoming = () => {
    const today = new Date();
    const feb15 = new Date(today.getFullYear(), 1, 15);
    const mar1 = new Date(today.getFullYear(), 2, 1);

    if (today < feb15) {
      setIsFebuaryUpcoming(true);
    }
    if (today < mar1) {
      setIsMarchUpcoming(true);
      return today < mar1;
    }
    return false;
  };

  useEffect(() => {
    isUpcoming();
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <div
          data-aos="fade-up"
          className="mt-6 mb-6 grid grid-cols-2 gap-4 p-2 border border-[#113167] md:w-1/2 rounded-md mx-auto"
        >
          <button
            onClick={() => setActiveTab("lawxtech-series")}
            className={` ${
              activeTab === "lawxtech-series"
                ? "bg-[#113167] text-white "
                : " text-black "
            } rounded-lg p-3.5 `}
          >
            LawXTech Series
          </button>
          <button
            onClick={() => setActiveTab("mini-series")}
            className={` ${
              activeTab === "mini-series"
                ? "bg-[#113167] text-white "
                : " text-black "
            } rounded-lg p-3.5 `}
          >
            Mini Series
          </button>
        </div>
        <div className="mt-12 pb-[5rem] ">
          <h4
            data-aos="fade-left"
            className="text-[#113167] text-4xl font-bold text-center my-4"
          >
            Law x Tech {activeTab === "mini-series" ? "Mini" : ""} Series
          </h4>

          <div className="mt-12  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-y-16  mt-6 place-items-center ">
              {Array.from({ length: activeTab === "lawxtech-series" ? 8 : 5 })
                .map((_, index) => index)
                .reverse()
                .map((index) => (
                  <Link
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    to="/"
                    key={index}
                    className="block"
                  >
                    <div className="relative border overflow-hidden rounded-lg w-80 hover:scale-105 ease-in-out transition-transform duration-300">
                      <img
                        src={`/assets/series/${
                          activeTab === "lawxtech-series"
                            ? "LxT Series"
                            : "Mini Series"
                        } ${index + 1}.jpeg`}
                        className="w-80 h-80 rounded-lg"
                        alt="LawXtech Events"
                      />

                      {isFebuaryUpcoming && index === 7 && (
                        <span className="px-3 py-1.5 bg-yellow-500 text-white absolute bottom-4 right-4 rounded-full text-sm font-[600] tracking-tight ">
                          Upcoming
                        </span>
                      )}

                      {isMarchUpcoming && index === 6 && (
                        <span className="px-3 py-1.5 bg-yellow-500 text-white absolute bottom-4 right-4 rounded-full text-sm font-[600] tracking-tight ">
                          Upcoming
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* {videos.map((video: Video, index) => (
            <div
              key={index}
              className="p-6 rounded-md grid grid-cols-2 gap-4 border-dotted border-2 border-blue-800 mb-8"
            >
              <div className="text-blue-800">
                <p className="mb-1">Keynote</p>
                <h5 className="text-xl font-semibold mb-2">
                  {video?.snippet?.title}
                </h5>
                <p className="text-blue-800 text-justify mb-4">
                  {video.snippet.description}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 font-semibold mb-1"
                >
                  View Link
                </a>
              </div>
              <div className="flex justify-end">
                <img
                  src={`/assets/team/joel.png`}
                  alt={`Team member`}
                  className="w-24 h-24 rounded-8"
                />
              </div>
            </div>
          ))} */}
        </div>
      </Container>
    </div>
  );
};

export default Series;
