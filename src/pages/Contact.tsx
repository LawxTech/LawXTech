import { Container } from "@mui/material";
import React from "react";

const Contact: React.FC = () => {
  //   fetch("https://formsubmit.co/rofiatolusanya12@gmail.com", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         alert("Subscription successful!");
  //         resetForm();
  //       } else {
  //         alert("Subscription failed. Please try again later.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       alert("Subscription failed. Please try again later.");
  //     });
  // };

  return (
    <div>
      <Container maxWidth="lg">
        <section className="  md:my-[5rem] p-[1rem] md:flex items-center md:gap-x-8 ">
          <div className="md:w-1/2 lg:w-1/3 bg-[#113167] text-white p-[2rem] rounded-xl ">
            <h2 className="text-white font-bold text-[1.7rem] ">
              Contact Information
            </h2>
            <p className="text-base ">Send us a mail.</p>
            <div className="py-[3rem] grid grid-cols-1 gap-y-10 mt-6 mb-24 ">
              <div className="flex items-center space-x-4">
                <p className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.0002 10.999H22.0002C22.0002 5.869 18.1272 2 12.9902 2V4C17.0522 4 20.0002 6.943 20.0002 10.999Z"
                      fill="white"
                    />
                    <path
                      d="M13.0003 7.99999C15.1033 7.99999 16.0003 8.89699 16.0003 11H18.0003C18.0003 7.77499 16.2253 5.99999 13.0003 5.99999V7.99999ZM16.4223 13.443C16.2301 13.2683 15.9776 13.1752 15.7181 13.1832C15.4585 13.1912 15.2123 13.2998 15.0313 13.486L12.6383 15.947C12.0623 15.837 10.9043 15.476 9.71228 14.287C8.52028 13.094 8.15928 11.933 8.05228 11.361L10.5113 8.96699C10.6977 8.78612 10.8064 8.53982 10.8144 8.2802C10.8225 8.02059 10.7292 7.76804 10.5543 7.57599L6.85928 3.51299C6.68432 3.32035 6.44116 3.2035 6.18143 3.18725C5.92171 3.17101 5.66588 3.25665 5.46828 3.42599L3.29828 5.28699C3.12539 5.46051 3.0222 5.69145 3.00828 5.93599C2.99328 6.18599 2.70728 12.108 7.29928 16.702C11.3053 20.707 16.3233 21 17.7053 21C17.9073 21 18.0313 20.994 18.0643 20.992C18.3088 20.9783 18.5396 20.8747 18.7123 20.701L20.5723 18.53C20.7417 18.3325 20.8276 18.0768 20.8115 17.817C20.7954 17.5573 20.6788 17.3141 20.4863 17.139L16.4223 13.443Z"
                      fill="white"
                    />
                  </svg>
                </p>
                <p className="text-lg">+234 909 903 0433</p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                      fill="white"
                    />
                  </svg>
                </p>
                <p className="text-lg">lawxtechseries@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                  >
                    <path
                      d="M9.00001 0.5C6.81276 0.50258 4.71584 1.3726 3.16923 2.91922C1.62261 4.46584 0.752589 6.56276 0.750009 8.75C0.747389 10.5374 1.33124 12.2763 2.41201 13.7C2.41201 13.7 2.63701 13.9963 2.67376 14.039L9.00001 21.5L15.3293 14.0353C15.3623 13.9955 15.588 13.7 15.588 13.7L15.5888 13.6978C16.669 12.2747 17.2526 10.5366 17.25 8.75C17.2474 6.56276 16.3774 4.46584 14.8308 2.91922C13.2842 1.3726 11.1873 0.50258 9.00001 0.5ZM9.00001 11.75C8.40666 11.75 7.82665 11.5741 7.3333 11.2444C6.83995 10.9148 6.45543 10.4462 6.22837 9.89805C6.00131 9.34987 5.9419 8.74667 6.05765 8.16473C6.17341 7.58279 6.45913 7.04824 6.87869 6.62868C7.29825 6.20912 7.83279 5.9234 8.41474 5.80764C8.99668 5.69189 9.59988 5.7513 10.1481 5.97836C10.6962 6.20542 11.1648 6.58994 11.4944 7.08329C11.8241 7.57664 12 8.15666 12 8.75C11.999 9.54535 11.6826 10.3078 11.1202 10.8702C10.5578 11.4326 9.79535 11.749 9.00001 11.75Z"
                      fill="white"
                    />
                  </svg>
                </p>
                <p className="text-lg">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 py-[5rem] md:px-6 ">
            <form action="">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                <div className="">
                  <label
                    htmlFor="firstName"
                    className="text-[0.875rem] font-medium "
                  >
                    First Name{" "}
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="John"
                      className="border text-base py-2.5 rounded-md w-full px-4 outline-none hover:border-neutral-600 focus:border-black focus:text-black "
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="firstName"
                    className="text-[0.875rem] font-medium "
                  >
                    Last Name{" "}
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="border text-base py-2.5 rounded-md w-full px-4 outline-none hover:border-neutral-600 focus:border-black focus:text-black "
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="firstName"
                    className="text-[0.875rem] font-medium "
                  >
                    Email{" "}
                  </label>
                  <div>
                    <input
                      type="email"
                      placeholder="johndoe@gmail.com"
                      className="border text-base py-2.5 rounded-md w-full px-4 outline-none hover:border-neutral-600 focus:border-black focus:text-black "
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="firstName"
                    className="text-[0.875rem] font-medium "
                  >
                    Phone No.{" "}
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="+234 80 3713 2689"
                      className="border text-base py-2.5 rounded-md w-full px-4 outline-none hover:border-neutral-600 focus:border-black focus:text-black "
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[3rem]">
                <label htmlFor="message" className="text-[0.875rem] ">
                  Message
                </label>
                <div className="w-full">
                  <textarea
                    name=""
                    id=""
                    rows={1}
                    placeholder="type your message here"
                    className="border-b w-full py-2  "
                  ></textarea>
                </div>
              </div>
              <div className="button flex justify-end mt-[0.5rem] ">
                <button
                  className="bg-[#113167] text-white px-12 py-3 font-[500] rounded-lg"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Contact;
