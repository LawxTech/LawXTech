import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const SpeakerAd = () => {
  return (
    <div className="py-[5rem] md:py-0 ">
      <Container maxWidth="lg">
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center border ">
          <div className="">
            <h4 className=" text-[1.8rem] mx-auto ">
              Become a Speaker at the Law x Tech Series
            </h4>
            <p className=" text-[.9rem] text-justify ">
              Are you passionate about the intersection of law and technology?
              Do you have insights and experiences that can inspire and educate
              others in this rapidly evolving field? If so, we invite you to
              become a featured speaker at the monthly Law x Tech Series
              webinar!
            </p>
            <div className="">
              <Link to="https://forms.gle/NFD7ex8vRV1YKZV39" target="_blank">
                <button className="text-white px-10 h-[3rem] rounded-md bg-[#131157] font-[600] text-[.95rem] mt-[1.5rem] ">
                  SPEAK HERE
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block border ">
            <img
              src={require("../../assets/speaker.png")}
              alt="Speaker"
              className="scale-50 "
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpeakerAd;
