import React from "react";

const card = ({ title, value }) => {
  return (
    <div className="inline-block p-4 pr-6 border border-light-grey rounded uppercase text-center max-md:pr-4 max-[652px]:w-4/5 max-[652px]:flex max-[652px]:items-center max-[652px]:justify-between max-[500px]:w-full">
      <h2 className="text-light-grey font-medium tracking-wide max-[652px]:text-[1rem]">
        {title}
      </h2>
      <span className="text-white text-5xl font-antonio leading-tight max-md:text-[2.6rem] max-[652px]:text-[1.6rem]">
        {value}
      </span>
    </div>
  );
};

export default card;
