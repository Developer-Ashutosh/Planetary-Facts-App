import React from "react";

const button = ({ index, title, selected }) => {
  return (
    <button
      className={`*:select-none px-6 py-3 border-[.1px] rounded flex gap-10  w-2/3 uppercase tracking-[2px] text-md font-light transition  ${
        selected
          ? "bg-main border-main font-normal"
          : "border-light-grey hover:bg-light-grey/30 hover:border-light-grey/35"
      } max-[1250px]:w-11/12 max-[980px]:w-4/6 max-[652px]:hidden`}
      data-id={index}
    >
      <span>0{index + 1}</span>
      <span>{title}</span>
    </button>
  );
};

export default button;
