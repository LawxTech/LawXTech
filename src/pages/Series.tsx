import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Series: React.FC = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/playlistItems",
          {
            params: {
              part: "snippet",
              maxResults: 50, // Change this value as per your requirement
              playlistId: "YOUR_PLAYLIST_ID", // Replace with your playlist ID
              key: "YOUR_YOUTUBE_API_KEY", // Replace with your YouTube Data API key
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
        <Box marginTop={4}></Box>
        <Box
          marginTop={6}
          marginBottom={6}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto",
            padding: "0.8rem",
            border: "1px solid #113167",
            width: "50%",
            borderRadius: 2,
          }}
        >
          <Button
            sx={{
              padding: "0.75rem 3.5rem",
              background: "#113167",
              color: "white",
            }}
          >
            LawXTech Series
          </Button>
          <Button color="secondary">LawXTech Mini Series</Button>
        </Box>
        <Box marginTop={8}>
          <Typography
            variant="h4"
            color="#133167"
            align="center"
            sx={{ fontSize: "2rem", marginTop: "4%", marginBottom: "4%" }}
            fontWeight="700"
            marginX="auto"
            gutterBottom
          >
            Law X Tech Series
          </Typography>

          {/* <Box
            bgcolor="#113167"
            sx={{
              padding: "2.5rem",
              borderRadius: 7,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              marginBottom: 8,
            }}
          >
            <Box
              sx={{
                color: "white",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "0.4rem",
                }}
              >
                Keynote
              </Typography>
              <Typography variant="h5" fontWeight="500" mb="0.8rem">
                Empowering Legal Technology: From Enthusiast to Expert
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  textAlign: "justify",
                  textJustify: "auto",
                  marginBottom: "1.2rem",
                }}
              >
                We are thrilled to introduce Ibrahim Haruna, a legal trailblazer
                and tech enthusiast who will be taking the stage at our upcoming
                Law x Tech event. He is not your average attorney; they are a
                visionary at the forefront of bridging the gap between the legal
                world and cutting-edge technology. At the upcoming Law x Tech
                event, Ibrahim Haruna will share his unique perspective on how
                technology is reshaping the legal landscape. Their talk promises
                to be an enlightening exploration of the opportunities and
                challenges that lie ahead for both legal professionals and tech
                enthusiasts alike. Join us at the next Law x Tech Series event
                as he leads us on a journey through the exciting world where law
                meets technology.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontWeight: "500",
                  marginBottom: "0.4rem",
                }}
              >
                View Link
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <img
                src={require(`../assets/team/joel.png`)}
                alt={`Team member`}
                style={{
                  width: "24rem",
                  height: "24rem",
                  borderRadius: 8,
                }}
              />
            </Box>
          </Box> */}
          {videos.map((video: any, index) => (
            <Box
              sx={{
                padding: "2.5rem",
                borderRadius: 7,
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                marginBottom: 8,
                border: "3px dotted #133167",
              }}
              key={index}
            >
              <Box
                sx={{
                  color: "#133167",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#133167",
                    marginBottom: "0.4rem",
                  }}
                >
                  Keynote
                </Typography>
                <Typography variant="h5" fontWeight="500" mb="0.8rem">
                  {video?.snippet.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#133167",
                    textAlign: "justify",
                    textJustify: "auto",
                    marginBottom: "1.2rem",
                  }}
                >
                  {video.snippet.description}
                </Typography>
                <a
                  href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#133167",
                      fontWeight: "500",
                      marginBottom: "0.4rem",
                    }}
                  >
                    View Link
                  </Typography>
                </a>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <img
                  src={require(`../assets/team/joel.png`)}
                  alt={`Team member`}
                  style={{
                    width: "24rem",
                    height: "24rem",
                    borderRadius: 8,
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Series;
