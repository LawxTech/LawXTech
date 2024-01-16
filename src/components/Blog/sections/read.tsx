import React from "react";
type selectedBlog = {
  title: string;
  duration: string;
  date: string;
  article: {
    p: string;
  }[];
  link: string;
  image: string;
};

type Props = {
  selectedBlog: selectedBlog;
};

const Read = ({ selectedBlog }: Props) => {
  return (
    <>
      {selectedBlog?.article ? (
        selectedBlog.article.map((item, index) => (
          <p
            className="font-raleway text-sm md:text-[0.9375rem] mt-6 text-justify !leading-8"
            key={index}
          >
            {item.p.split("**").map((text, index) => {
              if (index % 2 === 1) {
                return (
                  <span className="font-semibold" key={index}>
                    {text}
                  </span>
                );
              } else {
                return text;
              }
            })}
          </p>
        ))
      ) : (
        <p className="font-raleway text-sm md:text-base mt-6 text-justify">
          Fasten your seatbelt, As this episode is going to be yet another
          inspiring and vital piece of information. Stay Tuned!
        </p>
      )}
    </>
  );
};

export default Read;
