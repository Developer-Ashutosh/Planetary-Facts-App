import React, { useEffect, useState, Fragment } from "react";
import Card from "./components/Card/card.jsx";
import Button from "./components/Button/button.jsx";

const Main = ({ theme, preViewing, toggleView }) => {
  const [planetData, setPlanetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        setPlanetData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderPlanetInfo = (planet) => {
    const { name, overview, structure, geology, images } = planet;

    return (
      <section
        key={name.toLowerCase()}
        className="flex items-center justify-evenly gap-6 ml-12 max-[980px]:flex-col max-[980px]:ml-0 max-[980px]:gap-14 max-[652px]:gap-10"
      >
        <div className="h-[400px] w-[400px] max-lg:h-[350px] max-lg:w-[350px] max-sm:h-[320px] max-sm:w-[320px] max-[375px]:h-[290px] max-[375px]:w-[290px] max-[360px]:h-[250px] max-[360px]:w-[250px] relative">
          <img
            src={preViewing[1] ? images.internal : images.planet}
            className="h-full w-full"
            alt={name}
          />
          {preViewing[2] && (
            <img
              src={images.geology}
              alt="Geology"
              className="h-44 absolute -bottom-10 left-1/2 -translate-x-1/2 max-lg:h-40 max-[652px]:h-36 max-[652px]:-bottom-8 max-[375px]:h-28 "
            />
          )}
        </div>
        <div className="w-fit max-w-[45%] flex flex-col gap-4 max-[980px]:max-w-[100%] max-[980px]:items-center max-[980px]:text-center max-[980px]:gap-6 max-[652px]:gap-7">
          <h1 className="text-7xl uppercase font-antonio font-semibold max-[375px]:text-5xl">
            {name}
          </h1>
          <p className="w-4/5 text-light-grey text-lg leading-6 max-[1250px]:w-11/12 max-sm:w-11/12 max-[375px]:w-full">
            {preViewing[0]
              ? overview.content
              : preViewing[1]
              ? structure.content
              : geology.content}
          </p>
          <p className="text-[1.1rem] flex">
            Source:
            <a
              href={
                preViewing[0]
                  ? overview.source
                  : preViewing[1]
                  ? structure.source
                  : geology.source
              }
              target="_blank"
              className="text-light-grey underline font-medium ml-2 transition cursor-pointer hover:text-main flex items-center"
            >
              Wikipedia
              <img
                src="./icon-source.svg"
                alt="Source Icon"
                className=" ml-[.35rem] opacity-50"
              />
            </a>
          </p>
          <div
            className="flex flex-col gap-3 max-[980px]:w-full max-[980px]:items-center"
            onClick={(event) => toggleView(event)}
          >
            {["Overview", "Internal Structure", "Surface Geology"].map(
              (title, i) => (
                <Button
                  key={i}
                  index={i}
                  title={title}
                  selected={preViewing[i]}
                />
              )
            )}
          </div>
        </div>
      </section>
    );
  };

  const renderPlanetCards = (planet) => {
    const { rotation, revolution, radius, temperature } = planet;

    return (
      <section
        key={`${planet.name.toLowerCase()}-cards`}
        className="flex items-center justify-evenly flex-wrap gap-5 max-[652px]:flex-col max-[652px]:justify-between"
      >
        <Card title="Rotation Time" value={rotation} />
        <Card title="Revolution Time" value={revolution} />
        <Card title="Radius" value={radius} />
        <Card title="Average Temp." value={temperature} />
      </section>
    );
  };

  return (
    <main className="h-fit w-5/6 m-auto mt-8 py-5 flex flex-col gap-16 max-[652px]:gap-3 max-[652px]:mt-6">
      {planetData.map(
        (planet) =>
          planet.name.toLowerCase() === theme && (
            <Fragment key={planet.name.toLowerCase()}>
              {renderPlanetInfo(planet)}
              {renderPlanetCards(planet)}
            </Fragment>
          )
      )}
    </main>
  );
};

export default Main;
