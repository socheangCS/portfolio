import React, { useEffect, useState } from "react";
import logo from "../img/cs_white.png";
import Lottie from "react-lottie";
import navAni from "../animation/react.json";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

function Navigation({ goToHome, goToService, goToAbout, goToContact }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuVisible, setMenuVisible] = useState(false);
  const [check, setCheck] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setCheck(!check);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: navAni,
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

  const renderDesktopNav = ({
    goToHome,
    goToService,
    goToAbout,
    goToContact,
  }) => (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-around items-center h-28 border-b-2 border-white bg-bgcolor">
      <div>
        <img
          className="w-16 hover:animate-ping cursor-pointer"
          src={logo}
          alt="Logo"
          onClick={goToHome}
        />
      </div>
      <div>
        <ul className="flex text-white text-lg uppercase font-bold flex-row space-x-4 text-center">
          <li className="hover:animate-pulse">
            <a
              onClick={goToHome}
              className=" hover:text-activecol  cursor-pointer"
            >
              Home
            </a>
          </li>
          <li className="hover:animate-pulse">
            <a
              onClick={goToService}
              className=" hover:text-activecol cursor-pointer"
            >
              Services
            </a>
          </li>
          <li className="hover:animate-pulse">
            <a
              onClick={goToAbout}
              className=" hover:text-activecol cursor-pointer"
            >
              About
            </a>
          </li>
          <li className="hover:animate-pulse">
            <a
              onClick={goToContact}
              className=" hover:text-activecol cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <Lottie options={defaultOptions} height={100} width={100} />
      </div>
    </nav>
  );
  const renderMobileMenu = ({
    goToHome,
    goToService,
    goToAbout,
    goToContact,
  }) => (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-around items-center h-20 border-b-[1px] border-white bg-bgcolor">
      <div>
        <img className="w-10 " src={logo} alt="Logo" />
      </div>
      <div>
        <Lottie options={defaultOptions} height={50} width={50} />
      </div>
      {check ? (
        <ImCancelCircle color="white" size={22} onClick={toggleMenu} />
      ) : (
        <AiOutlineMenu color="white" size={22} onClick={toggleMenu} />
      )}
      <div
        className={`transform transition-all duration-300 absolute right-0 mt-52 w-40 bg-bgcolor rounded shadow-lg z-10 
    ${
      menuVisible
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none"
    }`}
      >
        <ul className="text-black text-sm font-bold flex flex-col text-center">
          <li
            className="px-4 py-2 text-white hover:bg-gray-200 hover:text-bgcolor cursor-pointer"
            onClick={() => {
              setMenuVisible(false);
              setCheck(!check);
            }}
          >
            <a className="cursor-pointer" onClick={goToHome}>
              Home
            </a>
          </li>
          <li
            className="px-4 py-2 text-white  hover:bg-gray-200 hover:text-bgcolor cursor-pointer"
            onClick={() => {
              setMenuVisible(false);
              setCheck(!check);
            }}
          >
            <a className="cursor-pointer" onClick={goToService}>
              Services
            </a>
          </li>
          <li
            className="px-4 py-2 text-white hover:bg-gray-200 hover:text-bgcolor "
            onClick={() => {
              setMenuVisible(false);
              setCheck(!check);
            }}
          >
            <a className="cursor-pointer" onClick={goToAbout}>
              About
            </a>
          </li>
          <li
            className="px-4 py-2 text-white hover:bg-gray-200 hover:text-bgcolor"
            onClick={() => {
              setMenuVisible(false);
              setCheck(!check);
            }}
          >
            <a className="cursor-pointer" onClick={goToContact}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
  return windowWidth < 980
    ? renderMobileMenu({ goToHome, goToService, goToAbout, goToContact })
    : renderDesktopNav({ goToHome, goToService, goToAbout, goToContact });
}

export default Navigation;
