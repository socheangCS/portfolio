import React, { useEffect, useState } from "react";
import web from "../img/code.png";
import app from "../img/app-development.png";
import api from "../img/web-development.png";
export default function Service() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Mobile = () => {
    return (
      <div className="w-[100%] h-[100vh] bg-slate-900 pt-2">
        <section className="flex flex-col justify-center items-center  w-[100%] h-[100vh] bg-bgcolor gap-8">
          <div>
            <h1 className="text-white uppercase text-lg font-bold">Services</h1>
          </div>

          <div className=" mt-[70px] w-[80%] h-[400px] pb-8  flex flex-col justify-center items-center gap-8">
            <div className="cursor-pointer transform transition-all duration-300 hover:scale-110 w-56 rounded-2xl bg-slate-700 flex flex-col items-center gap-8 pt-10 pb-10">
              <img src={web} className="w-[24px]" alt="Web Developer" />
              <p className="text-white uppercase font-bold text-[10px]">
                Web Developer
              </p>
            </div>

            <div className="cursor-pointer transform transition-all duration-300 hover:scale-110 w-56 rounded-2xl bg-slate-700 flex flex-col items-center gap-8 pt-10 pb-10">
              <img src={app} className="w-[18px]" />
              <p className="text-white uppercase font-bold text-[10px]">
                Mobile App Developer
              </p>
            </div>
            <div className="cursor-pointer transform transition-all duration-300 hover:scale-110 w-56 rounded-2xl bg-slate-700 flex flex-col items-center gap-8 pt-10 pb-10">
              <img src={api} className="w-[18px]" />
              <p className="text-white uppercase font-bold text-[10px]">
                Rest Api
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  const Desktop = () => {
    return (
      <div className="w-[100%] h-[100vh] pt-28 bg-slate-900">
        <section className="flex pt-8 flex-col text-center items-center  w-[100%] h-[100vh] bg-bgcolor">
          <div className="mt-20">
            <h1 className="text-white uppercase text-2xl font-bold">
              Services
            </h1>
          </div>

          <div className=" mt-[100px] w-[80%] h-[400px]  flex justify-center items-center gap-10">
            <div className="cursor-pointer transform transition-all duration-300 hover:scale-110 w-56 rounded-2xl bg-slate-700 flex flex-col items-center pt-10 h-52 gap-12">
              <img src={web} className="w-[24px]" alt="Web Developer" />
              <p className="text-white uppercase font-bold text-sm">
                Web Developer
              </p>
            </div>

            <div className="cursor-pointer transform transition-all duration-300 hover:scale-110 w-56 rounded-2xl bg-slate-700 flex flex-col items-center pt-10 h-52 gap-12">
              <img src={app} className="w-[24px]" />
              <p className="text-white uppercase font-bold text-sm">
                Mobile App Developer
              </p>
            </div>
            <div className="cursor-pointer transform transition-all duration-300 hover:scale-110 w-56 rounded-2xl bg-slate-700 flex flex-col items-center pt-10 h-52 gap-12">
              <img src={api} className="w-[24px]" />
              <p className="text-white uppercase font-bold text-sm">Rest Api</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  return windowWidth < 980 ? Mobile() : Desktop();
}
