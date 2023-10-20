import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Homeani from "../animation/person.json";
import Lottie from "react-lottie";

export default function Home({ contactRef }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Homeani,
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const data = [
    "Socheang Dev",
    "Web Developer",
    "Mobile App Developer",
    "Rest API Developer",
  ];
  const Desktop = () => {
    return (
      <section className="w-[100%] h-[100vh] bg-bgcolor flex flex-col justify-center items-center">
        <div className="w-[100%] h-[100%] flex justify-center ">
          <div className="flex flex-row  justify-around items-center  w-[80%] max-w-[1300px]">
            <div className="w-[50%] flex justify-center flex-col gap-10">
              <h1 className=" text-white font-bold text-3xl">
                I'm
                <span className="pl-2 text-activecol">
                  <Typewriter
                    words={data}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={25}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <button
                onClick={scrollToContact}
                className="w-56 uppercase h-10 rounded-[3px] border-[1px] hover:border-none border-white text-white font-bold transform transition-all duration-300 hover:bg-activecol hover:scale-105 hover:animate-pulse"
              >
                Hire Me
              </button>
            </div>
            <div className="w-[50%] flex justify-center">
              <Lottie
                options={defaultOptions}
                style={{ width: 400, height: 400 }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

  const Mobile = () => {
    return (
      <section className="w-[100%] h-[650px] bg-bgcolor flex justify-center">
        <div className="w-[80%] h-[100%] flex justify-center">
          <div className="flex flex-col pt-60 justify-around items-center gap-12 w-[100%] h-[300px]">
            <div className="w-[50%] flex justify-center">
              <Lottie
                options={defaultOptions}
                style={{ width: 200, height: 200 }}
              />
            </div>
            <div className="w-[100%] flex justify-center">
              <h1 className=" text-white font-bold text-[20px]">
                I'm
                <span className="pl-2 text-activecol">
                  <Typewriter
                    words={data}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            </div>
            <div>
              <button
                onClick={scrollToContact}
                className="w-[100px]  uppercase h-[24px] text-[12px] rounded-[3px] border-[1px] border-white text-white font-bold transform transition-all duration-300 hover:bg-activecol hover:scale-105"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return windowWidth < 980 ? Mobile() : Desktop();
}
