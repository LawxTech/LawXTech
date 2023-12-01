import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";

interface Video {
  id: string;
  snippet: {
    title: string;
    description: string;
    resourceId: {
      videoId: string;
    };
  };
}

const Series = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/playlistItems",
          {
            params: {
              part: "snippet",
              maxResults: 50,
              playlistId: "YOUR_PLAYLIST_ID",
              key: "YOUR_YOUTUBE_API_KEY",
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching data from YouTube API", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <div className="mt-6 mb-6 grid grid-cols-2 gap-4 p-2 border border-[#113167] md:w-1/2 rounded-md mx-auto">
          <button className="p-3.5 bg-[#113167] rounded-lg text-white">
            LawXTech Series
          </button>
          <button className="text-secondary hover:bg-blue-800 hover:text-white rounded-lg ">
            Mini Series
          </button>
        </div>
        <div className="mt-8 py-[5rem] ">
          <h4 className="text-[#113167] text-2xl font-bold text-center my-4">
            Law X Tech Series
          </h4>

          {videos.map((video: Video, index) => (
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
                  src={require(`../assets/team/joel.png`)}
                  alt={`Team member`}
                  className="w-24 h-24 rounded-8"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Series;
