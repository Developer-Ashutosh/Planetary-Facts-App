import React, { useState } from "react";

const Header = ({ updateTheme, toggleView }) => {
  const planets = [
    {
      title: "Mercury",
      color: "#419ebb",
    },
    {
      title: "Venus",
      color: "#eda249",
    },
    {
      title: "Earth",
      color: "#6d2ed5",
    },
    {
      title: "Mars",
      color: "#d14c32",
    },
    {
      title: "Jupiter",
      color: "#d83a34",
    },
    {
      title: "Saturn",
      color: "#cd5120",
    },
    {
      title: "Uranus",
      color: "#1ec1a2",
    },
    {
      title: "Neptune",
      color: "#2d68f0",
    },
  ];

  const [isChecked, setIsChecked] = useState(false);

  const handleTheme = (theme) => {
    updateTheme(theme);
  };

  return (
    <>
      <header
        className={`select-none h-[85px] hw-full flex items-center justify-between border-b-[0.1px] border-light-grey min-[652px]:px-7 max-[800px]:flex-col max-[800px]:justify-center max-[800px]:gap-5 max-[800px]:h-24 ${
          isChecked
            ? "max-[652px]:h-fit max-[652px]:gap-7 max-[652px]:pt-4"
            : "max-[652px]:h-[70px]"
        }`}
      >
        <div className="flex items-center justify-between max-[652px]:w-full max-[652px]:px-7">
          <h1 className="text-3xl font-normal uppercase font-antonio max-[800px]:tracking-widest">
            The Planets
          </h1>

          <input
            type="checkbox"
            onChange={(e) => setIsChecked(e.currentTarget.checked)}
            checked={isChecked}
            className="w-7 h-1 bg-white rounded cursor-pointer relative before:h-full before:w-full before:absolute before:bg-white before:rounded before:-top-[150%] before:transition before:duration-300 before:ease-linear checked:before:top-[0%] checked:before:rotate-[135deg] after:h-full after:w-full after:absolute after:bg-white after:rounded after:-bottom-[150%] after:transition after:duration-300 after:ease-linear checked:after:-bottom-[0%] checked:after:rotate-[45deg] hidden max-[652px]:block"
          />
        </div>

        <div
          className={`h-full flex items-center justify-evenly ${
            isChecked ? "max-[652px]:flex" : "max-[652px]:hidden"
          } min-[652px]:gap-7 max-[652px]:flex-col max-[652px]:w-full`}
        >
          {planets.map(({ title, color }) => (
            <button
              key={title.toLowerCase()}
              className={`flex items-center text-[15px] uppercase transition-scale duration-200 cursor-pointer max-[800px]:tracking-wider max-[652px]:text-[1rem] ${
                isChecked
                  ? "justify-start gap-4 w-full relative max-[652px]:border-t border-dark-grey max-[652px]:px-7 max-[652px]:py-4"
                  : "h-5/6 border-t-2 border-transparent hover:border-main hover:scale-110 max-[800px]:border-t-0 max-[800px]:hover:scale-100"
              }`}
              onClick={() => {
                handleTheme(title.toLowerCase());
                setIsChecked(false);
              }}
            >
              {isChecked && (
                <>
                  <span
                    className="h-[1.1rem] w-[1.1rem] rounded-full min-[652px]:hidden"
                    style={{ backgroundColor: color }}
                  ></span>
                  <img
                    src="./icon-chevron.svg"
                    alt="Chevron Icon"
                    className="absolute right-10 scale-125"
                  />
                </>
              )}
              {title}
            </button>
          ))}
        </div>
      </header>

      <nav className="h-12 w-full grid-cols-3 border-b-[0.1px] border-light-grey relative hidden max-[652px]:grid">
        {["Overview", "Structure", "Surface"].map((title, i) => (
          <button
            key={i}
            className="flex items-center justify-center uppercase text-sm tracking-wider cursor-pointer"
            data-id={i}
            onClick={(event) => toggleView(event)}
          >
            {title}
          </button>
        ))}
        <span
          className={`absolute -bottom-0.5 ${
            ["left-0", "left-1/3", "left-2/3"][
              JSON.parse(localStorage.getItem("activePreviewState")) || 0
            ]
          } h-[2.8px] w-1/3 bg-main rounded-xl transition-all duration-700`}
        ></span>
      </nav>
    </>
  );
};

export default Header;
