import { Container } from "@mui/material";
import { Link } from "react-router-dom";

// make a json that contains footer data by categories
const footerData = {
  pages: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "Series",
      link: "/series",
    },
    {
      title: "Contact",
      link: "/contact-us",
    },
  ],
  socials: [
    {
      title: "Slack",
      link: "https://join.slack.com/t/lawxtech/shared_invite/zt-20u7mvfqu-EWVec2Qip3XhYoUyVtyvpA",
      icon: "fab fa-slack",
    },
    {
      title: "Twitter | X",
      link: "https://x.com/lawxtech?s=21&t=1MzXUA2o4FeTHH1f7uE8AA",
      icon: "fab fa-twitter",
    },
    {
      title: "Youtube",
      link: "https://www.youtube.com/channel/UCfq_FJXXb_3dXecSs9aUDuw",
      icon: "fab fa-youtube",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/company/law-x-tech/",
      icon: "fab fa-linkedin-in",
    },
    {
      title: "Instagram",
      link: "https://instagram.com/lawxtech?igshid=MzMyNGUyNmU2YQ==",
      icon: "fab fa-instagram",
    },
  ],
  contact: [
    {
      title: "Email",
      link: "mailto:lawxtech@gmail.com",
      icon: "far fa-envelope",
    },
    {
      title: "Phone",
      link: "tel:+2349099030433",
      icon: "fas fa-phone-alt",
    },
    {
      title: "Address",
      link: "https://goo.gl/maps/3Xb1kz4Uf4Yi8z5r7",
      icon: "fas fa-map-marker-alt",
    },
  ],
};

function Footer() {
  return (
    <>
      <div className="w-full font-raleway bg-[#113167] text-neutral-50 py-20">
        <Container maxWidth="lg">
          <div className="px-6 xs:px-0 ">
            <div className="md:flex flex-row lg:grid sm:grid-cols-2 mb-8">
              <div className="w-full sm:w-1/3 lg:w-full mb-4">
                <h3 className="font-[600] text-[1.5rem] ">LawxTech</h3>
                <p className="text-sm font-[400] sm:text-base lg:text-base !leading-6 md:!leading-7 mt-4 sm:hidden xl:block lg:w-3/4">
                  Law x Tech is your gateway to a thriving career at the
                  intersection of law and technology. <br />
                  <span className="pt-2">This is where Law meets Tech.</span>
                </p>
              </div>

              <div className="hidden w-full md:w-2/3 lg:w-full sm:grid grid-cols-3 sm:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <h3 className="font-raleway font-medium text-lg text-white mb-4">
                    Socials
                  </h3>
                  <div className="flex flex-col space-y-2">
                    {footerData.socials.map((item) => (
                      <Link to={item.link} key={item.link} target="_blank">
                        <p className="font-raleway font-normal text-base text-neutral-50 cursor-pointer hover:underline">
                          {item.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-raleway font-medium text-lg text-white mb-4">
                    Pages
                  </h3>
                  <div className="flex flex-col space-y-2">
                    {footerData.pages.map((item) => (
                      <Link to={item.link} key={item.link}>
                        <p className="font-raleway font-normal text-base text-neutral-50 cursor-pointer hover:underline">
                          {item.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="font-raleway font-medium text-lg text-white mb-4">
                    Contact
                  </h3>
                  <div className="flex flex-col space-y-2">
                    {footerData.contact.map((item) => (
                      <Link to={item.link} key={item.link} target="_blank">
                        <p className="font-raleway font-normal text-base text-neutral-50 cursor-pointer hover:underline">
                          {item.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <hr className="mb-4" />

            <div className="md:grid grid-cols-1 sm:grid-cols-2 items-center py-2 mt-4">
              <div className="flex items-center font-raleway font-normal sm:text-base text-sm text-neutral-50 space-x-2 mb-3 md:mb-0">
                <span className=" ">All rights reserved</span>
                <span className="font-number ">LawxTech </span>
                <span className="font-number ">© 2023 </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
