import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Counter from "../../utils/Counter";

export const Banner = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full min-h-[80vh] border-b">
        <div
          style={{
            width: "100%",
            height: "80vh",
            background: `url("/images/landing-image.jpg")`,
            boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.7)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
          id="banner"
        >
          <div className="h-[70vh] flex items-center w-full md:w-[700px] p-8 mx-auto">
            <div className="grid grid-cols-1 gap-[1.3rem] ">
              <h1
                data-aos="fade-down"
                className="text-[2.5rem] leading-[2.9rem] md:text-[3.5rem] md:!leading-[4rem] font-[500] md:font-[600] text-[#fff] sm:text-center "
              >
                Empowering Lawyers in the Tech World.
              </h1>

              <p
                data-aos="fade-left"
                className="text-[1rem] sm:text-center text-neutral-200 font-[500] "
              >
                Are you a lawyer looking to embrace the dynamic world of
                technology? Or you are a techie seeking legal knowledge to boost
                your career? Law x Tech is your gateway to a thriving career at
                the intersection of law and technology.
              </p>

              <Link
                to="https://forms.gle/P9jUJr3NaAGnS4Je6"
                target="_blank"
                className=" sm:text-center"
                data-aos="fade-up"
              >
                <Button
                  className="btn"
                  variant="contained"
                  size="large"
                  sx={{
                    padding: "1rem 2rem",
                  }}
                >
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Container maxWidth="lg">
        <div className="py-12 ">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-[.95rem] text-center ">Mini Series</p>
              <h1 className="text-[2.5rem] !leading-[3.6rem] font-[600] text-[#113167] text-center ">
                <Counter targetValue={12} />
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-[.95rem] text-center ">Major Series</p>
              <h1 className="text-[2.5rem] !leading-[3.6rem] font-[600] text-[#113167] text-center ">
                <Counter targetValue={12} />
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-[.95rem] text-center ">Current Members</p>
              <h1 className="text-[2.5rem] !leading-[3.6rem] font-[600] text-[#113167] text-center ">
                <Counter targetValue={300} />
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-[.95rem] text-center ">Team Members</p>
              <h1 className="text-[2.5rem] !leading-[3.6rem] font-[600] text-[#113167] text-center ">
                <Counter targetValue={10} />
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};
