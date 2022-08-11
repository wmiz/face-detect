import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imgURL, box }) => {
  return (
    <div className="center pa4 ma">
      <div className="absolute mt2">
        <img id="inputimage" width="500px" height="auto" src={imgURL} alt="" />
        <div
          className="bounding-box blur"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.botRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
