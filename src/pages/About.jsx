import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import aboutAni from "../animation/nav.json";
export default function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeContent, setActiveContent] = useState("Education");
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aboutAni,
  };

  const contents = {
    Skill: (
      <ul>
        <li>C programming</li>
        <li>C++ OOP</li>
        <li>.Net OOP</li>
        <li>Java programming</li>
        <li>PHP OOP</li>
        <li>Laravel API</li>
        <li>React</li>
        <li>React Native</li>
        <li>Node Rest API</li>
      </ul>
    ),
    Education:
      "2020-present Studying in Computer Science at Royal University of Phnom Penh (RUPP).",
    Experience: "This is the content for Experience.",
  };
  const getButtonClass = (contentName) => {
    const baseClass = "text-sm px-2 font-bold underline py-1 rounded w-[90px] ";
    return activeContent === contentName
      ? `${baseClass} text-cyan-400 border-b-[1px] no-underline  border-activecol  bg-gray-800`
      : `${baseClass} hover:bg-gray-800`;
  };
  const Mobile = () => {
    return (
      <div className="w-[100%] h-[650px] border-b-2 border-white bg-slate-900 pt-2">
        <section className="w-[100%] h-[900px] bg-bgcolor flex flex-col items-center">
          <div className="w-[80%] flex justify-center p-10">
            <h1 className="text-white uppercase font-bold text-lg">About</h1>
          </div>
          <div className="w-[80%] max-w-[560px] text-white bg-slate-700 pb-10 rounded-lg flex flex-col items-center">
            <div className="w-[100%] flex flex-col gap-3">
              <div className="w-[100%]">
                <h2 className="text-center font-bold text-sm uppercase pt-6">
                  About Me
                </h2>
              </div>
              <div className="w-[100%] flex justify-center">
                <p className="w-[80%] p-6 bg-white rounded-lg font-bold text-black text-[10px] uppercase text-center">
                  My name is Socheang, I'm 21year old from Cambodia.
                </p>
              </div>
            </div>

            <div className="pt-10">
              <button
                onClick={() => setActiveContent("Skill")}
                className={getButtonClass("Skill")}
              >
                Skill
              </button>
              <button
                onClick={() => setActiveContent("Education")}
                className={getButtonClass("Education")}
              >
                Education
              </button>
              <button
                onClick={() => setActiveContent("Experience")}
                className={getButtonClass("Experience")}
              >
                Experience
              </button>
            </div>
            <div className="w-[80%] mt-6 p-4 uppercase font-bold bg-white flex justify-center text-slate-700 rounded text-[10px]">
              {contents[activeContent]}
            </div>
          </div>
        </section>
      </div>
    );
  };
  const Desktop = () => {
    return (
      <div className="w-[100%] h-[100vh] bg-slate-900 pt-28 ">
        <section className="w-[100%] h-[900px] bg-bgcolor flex flex-col items-center">
          <div className="w-[80%] flex justify-center p-10">
            <h1 className="text-white uppercase font-bold text-2xl">About</h1>
          </div>
          <div className="w-[100%] h-[600px] pt-10 flex flex-row justify-center gap-20 ">
            <div className="w-[40%]">
              <Lottie options={defaultOptions} width={500} height={500} />
            </div>
            <div className="w-[50%] max-w-[560px] text-white bg-slate-700 rounded-lg flex flex-col items-center">
              <div className="w-[100%] flex flex-col gap-3 ">
                <div className="w-[100%]">
                  <h2 className="text-center font-bold text-lg uppercase pt-12">
                    About Me
                  </h2>
                </div>
                <div className="w-[100%] flex justify-center">
                  <p className="w-[50%] p-6 uppercase bg-white rounded-lg font-bold text-black text-sm text-center">
                    My name is Socheang, i'm 21year old from Cambodia.
                  </p>
                </div>
              </div>

              <div className="pt-10">
                <button
                  onClick={() => setActiveContent("Skill")}
                  className={getButtonClass("Skill")}
                >
                  Skill
                </button>
                <button
                  onClick={() => setActiveContent("Education")}
                  className={getButtonClass("Education")}
                >
                  Education
                </button>
                <button
                  onClick={() => setActiveContent("Experience")}
                  className={getButtonClass("Experience")}
                >
                  Experience
                </button>
              </div>
              <div className="w-[300px] uppercase mt-8 p-4 font-bold bg-white flex justify-center text-slate-700 rounded text-sm">
                {contents[activeContent]}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  return windowWidth < 980 ? Mobile() : Desktop();
}
