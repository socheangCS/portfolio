import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import nullAni from "../animation/404.json";
function Nullpage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: nullAni,
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
  return windowWidth < 980 ? (
    <div className="w-[101%] h-[668px] bg-bgcolor flex justify-center items-center ">
      <Lottie options={defaultOptions} width={500} height={500} />;
    </div>
  ) : (
    <div className="w-[100%] h-[1000px] bg-bgcolor flex justify-center items-center ">
      <Lottie options={defaultOptions} width={500} height={500} />;
    </div>
  );
}

export default Nullpage;
