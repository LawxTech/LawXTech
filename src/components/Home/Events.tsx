import { Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";

export const Events = () => {
  return (
    <>
      <Container maxWidth="lg">
        <div className=" py-[5rem]">
          <h4
            data-aos="fade-up"
            className="text-[#133167] font-[600] text-[1.5rem] md:text-[2rem] text-center"
          >
            Upcoming Events
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6  ">
            {Array.from(Array(3).keys()).map((item, index) => (
              <Grid item maxWidth="sm" key={index}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="drop-shadow-md rounded-lg w-[22rem] mx-auto "
                >
                  <img
                    src={`/assets/events/event${index + 1}.png`}
                    className="object-cover object-center "
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
            ))}
          </div>
        </div>
      </Container>

      <div className="flex items-center py-[5.5rem] lg:px-[3.5rem] bg-[#113167]">
        <Container maxWidth="lg">
          <div className="grid md:grid-cols-2 gap-5 ">
            <div className="w-full ">
              <h4
                data-aos="fade-up"
                className="text-white text-[1.7rem] md:text-[2rem] font-[500] "
              >
                Join us at LawxTech as a VOLUNTEER
              </h4>
              <div className="w-full xl:w-4/5 mt-[1rem]">
                <p
                  data-aos="fade-up"
                  className="text-white text-[.9rem] text-justify !leading-6 "
                >
                  Do you have tech skills such as graphics designing, web
                  development, community management, copy writing, content
                  writing / creation, project management and the likes? Are you
                  interested in gaining hands on experience working on real life
                  projects with us? Then, join us today!
                </p>
              </div>
              <Link data-aos="fade-up" to="https://forms.gle/Uba4R8QKKeiufVUj6">
                <button className="bg-white px-10 h-[3rem] rounded-md text-[#131157] font-[600] text-[.95rem] mt-[1.5rem] ">
                  Apply Here
                </button>
              </Link>
            </div>
            <div className="">
              <div
                data-aos="fade-left"
                className="border-2 rounded-xl w-[20rem] h-[22rem] mx-auto overflow-hidden"
              >
                <img
                  src={`/assets/members/Chidimma M. Chukwuani, Content Creator Volunteer.jpeg`}
                  alt={`Team member : Chidimma Chukwuani`}
                  className="h-[22rem] w-[22rem] "
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
