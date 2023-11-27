import { Typography, Grid, Container } from "@mui/material";

export const Events = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: "#133167",
            fontWeight: "bold",
            fontSize: "1.8rem",
            marginTop: 6,
            marginBottom: 3,
          }}
          gutterBottom
        >
          Upcoming Events
        </Typography>
      </Container>

      <Container maxWidth="lg" className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
          {Array(3).fill(
            <Grid item maxWidth="sm" key="comm">
              <div className="border rounded-lg w-[20rem] ">
                <img
                  src={require("../../assets/events/event1.png")}
                  className=""
                  alt="Upcoming Events"
                />
                <div className="p-4">
                  <h5 className="text-[#133167] font-[600] text-[1.2rem]">
                    Community Chat
                  </h5>
                  <p className="text-[#133167] font-[400] text-[0.85rem]">
                    30-09-2023
                  </p>
                </div>
              </div>
            </Grid>
          )}
        </div>
      </Container>

      <div className="flex items-center min-h-[30vh] md:px-[3.5rem] bg-[#113167] my-6 ">
        <Container maxWidth="lg">
          <div className="w-full sm:w-2/3 px-6">
            <h4 className="text-white text-[1.7rem] md:text-[2rem] ">
              Join us at Law x Tech as a VOLUNTEER
            </h4>
            <div className="w-full md:w-3/4 mt-[1rem]">
              <p className="text-white text-[.9rem] text-justify ">
                Do you have tech skills such as graphics designing, web
                development, community management, copy writing, project
                management and the likes? Are you interested in gaining hands on
                experience working on real life projects with us? Then, join us
                today!
              </p>
            </div>
            <button className="bg-white px-10 h-[3rem] rounded-md text-[#131157] font-[600] text-[.95rem] mt-[1.5rem] ">
              Apply Here
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};
