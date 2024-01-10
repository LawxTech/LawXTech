import React from "react";

type Props = {};

const Form = (props: Props) => {
  return (
    <>
      <form action="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 md:gap-6 ">
          <div data-aos="fade-right" className="">
            <label htmlFor="firstName" className="text-[0.875rem] font-medium ">
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
          <div data-aos="fade-left" className="">
            <label htmlFor="firstName" className="text-[0.875rem] font-medium ">
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
          <div data-aos="fade-right" className="">
            <label htmlFor="firstName" className="text-[0.875rem] font-medium ">
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
          <div data-aos="fade-left" className="">
            <label htmlFor="firstName" className="text-[0.875rem] font-medium ">
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
        <div data-aos="fade-up" className="mt-[1rem] md:mt-[3rem]">
          <label htmlFor="message" className="text-[0.875rem] font-medium ">
            Message
          </label>
          <div className="w-full">
            <textarea
              name=""
              id=""
              rows={1}
              placeholder="type your message here"
              className="border-b w-full py-2 outline-none hover:border-neutral-600 focus:border-black focus:text-black  "
            ></textarea>
          </div>
        </div>
        <div className="button flex justify-end mt-[1rem] md:mt-[0.5rem] ">
          <button
            data-aos="fade-right"
            className="bg-[#113167] text-white px-12 py-3 font-[500] rounded-lg"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
