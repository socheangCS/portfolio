import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  BsTelephone,
  BsFacebook,
  BsTelegram,
  BsInstagram,
} from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import cv from "../files/cv.pdf";
import navAni from "../animation/react.json";

export default function Contact() {
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: navAni,
  };
  const Mobile = () => {
    return (
      <div className=" w-[100%] h-[550px] bg-slate-900 pt-2">
        <section className="w-[100%] h-[90%] bg-bgcolor ">
          <div className="w-[100%] h-[300px] pt-20">
            <div>
              <h1 className="uppercase font-bold text-lg text-center text-white">
                Contact Me
              </h1>
            </div>
            <div className="pt-10 w-[100%] flex flex-col items-center gap-5">
              <div className="flex flex-row justify-center text-gray-300 gap-1">
                <MdOutlineAlternateEmail size={14} className="text-activecol" />
                <h3 className="text-[12px] font-bold">socheang777@gmail.com</h3>
              </div>
              <div className="flex flex-row text-gray-300 justify-center pr-20 gap-1 w-[100%]">
                <BsTelephone size={14} className="text-activecol" />
                <h3 className="text-[10px] font-bold">0978656494</h3>
              </div>
              <div className=" pt-3 flex flex-row gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100090485471784&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <BsFacebook size={16} className="text-slate-400 " />
                </a>
                <a href="https://twitter.com/SocheangCS" target="_blank">
                  <FaXTwitter size={16} className="text-slate-400" />
                </a>
                <a href="http://t.me/socheang7" target="_blank">
                  <BsTelegram size={16} className="text-slate-400" />
                </a>
                <a
                  href="https://instagram.com/cs_socheang?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                >
                  <BsInstagram size={16} className="text-slate-400" />
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={cv}
                  download="mycv.pdf"
                  className="text-[12px] font-bold text-slate-700 bg-activecol pl-5 pr-5 pt-2 pb-2 rounded-sm"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className="mt-3 bg-black w-[100%] flex flex-row justify-center items-center h-10 text-white">
          <h1 className="text-[10px]">Copyright by</h1>
          <a
            href="https://www.facebook.com/profile.php?id=100090485471784&mibextid=LQQJ4d"
            target="_blank"
            className="pl-2 pr-2 text-slate-300 font-bold text-[14px]"
          >
            SocheangDev
          </a>
          <div>
            <Lottie options={defaultOptions} height={30} width={30} />
          </div>
        </footer>
      </div>
    );
  };
  const Desktop = () => {
    return (
      <div className=" w-[100%] h-[900px] bg-slate-900 pt-28">
        <section className="w-[100%] h-[90%] bg-bgcolor flex flex-row items-center">
          <div className="w-[100%] h-[300px]">
            <div>
              <h1 className="uppercase font-bold text-2xl text-center text-white">
                Contact Me
              </h1>
            </div>
            <div className="pt-10 w-[100%] flex flex-col items-center gap-5">
              <div className="flex flex-row justify-center text-gray-300 gap-1">
                <MdOutlineAlternateEmail size={16} className="text-activecol" />
                <h3 className="text-[14px] font-bold">socheang777@gmail.com</h3>
              </div>
              <div className="flex flex-row text-gray-300 justify-center pr-20 gap-1 w-[100%]">
                <BsTelephone size={16} className="text-activecol" />
                <h3 className="text-[12px] font-bold">0978656494</h3>
              </div>
              <div className=" pt-3 flex flex-row gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100090485471784&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <BsFacebook
                    size={20}
                    className="text-slate-400 hover:text-blue-600 transition-transform duration-300 hover:scale-125"
                  />
                </a>
                <a href="https://twitter.com/SocheangCS" target="_blank">
                  <FaXTwitter
                    size={20}
                    className="text-slate-400 hover:text-activecol transition-transform duration-300 hover:scale-125"
                  />
                </a>
                <a href="http://t.me/socheang7" target="_blank">
                  <BsTelegram
                    size={20}
                    className="text-slate-400 hover:text-blue-400 transition-transform duration-300 hover:scale-125"
                  />
                </a>
                <a
                  href="https://instagram.com/cs_socheang?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                >
                  <BsInstagram
                    size={20}
                    className="text-slate-400 hover:text-orange-300 transition-transform duration-300 hover:scale-125"
                  />
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={cv}
                  download="mycv.pdf"
                  className="text-[16px] hover:animate-ping font-bold text-slate-700 bg-activecol pl-10 pr-10 pt-3 pb-3 rounded-sm"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="w-[50%] pr-[25%]">
            <form className="flex flex-col gap-5 justify-center items-center">
              <input
                type="text"
                placeholder="Your Name"
                className="w-[300px] placeholder:text-[12px] placeholder:font-bold bg-slate-700 p-2 rounded-sm  text-slate-200"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-[300px] placeholder:text-[12px] placeholder:font-bold bg-slate-700 p-2 rounded-sm  text-slate-200"
              />
              <input
                type="text"
                placeholder="Your Message"
                className="w-[300px]  placeholder:text-[12px] placeholder:font-bold bg-slate-700 p-2 pb-20 rounded-sm  text-slate-200"
              />
              <button className="transition-transform duration-300 hover:scale-110  p-2 pl-20 pr-20 rounded-sm font-bold text-lg text-gray-700  bg-activecol">
                Submit
              </button>
            </form>
          </div>
        </section>
        <footer className="bg-black w-[100%] flex flex-row justify-center items-center h-20 mt-2 text-white">
          <h1 className="text-[14px]">Copyright by</h1>
          <a
            href="https://www.facebook.com/profile.php?id=100090485471784&mibextid=LQQJ4d"
            target="_blank"
            className="pl-2 pr-2 text-slate-300 font-bold text-[18px]"
          >
            SocheangDev
          </a>
          <div>
            <Lottie options={defaultOptions} height={60} width={60} />
          </div>
        </footer>
      </div>
    );
  };
  return windowWidth < 980 ? Mobile() : Desktop();
}
