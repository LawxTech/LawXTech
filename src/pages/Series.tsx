import React, { useState } from "react";
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 place-items-center ">
              {Array.from(
                Array(activeTab === "lawxtech-series" ? 6 : 5).keys()
              ).map((item, index) => (
                <Link
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  to="/"
                  key={index}
                >
                  <div className="border overflow-hidden rounded-lg w-[22rem] ">
                    <img
                      src={`/assets/series/${
                        activeTab === "lawxtech-series"
                          ? "LxT Series"
                          : "Mini Series"
                      } ${index + 1}.jpeg`}
                      className=""
                      alt="Upcoming Events"
                    />
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
