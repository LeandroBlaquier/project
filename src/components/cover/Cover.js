import React from "react";
import videoBg from "../../assets/video1.mp4";

const Cover = () => {
  return (
    <>
      <video src={videoBg} autoPlay loop muted></video>
    </>
  );
};

export default Cover;
