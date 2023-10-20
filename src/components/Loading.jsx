import React from "react";
import Lottie from "react-lottie";
import comingsoon from "../animation/comingsoon.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: comingsoon,
};

function LottieLoading() {
  return <Lottie options={defaultOptions} height={400} width={400} />;
}

export default LottieLoading;
