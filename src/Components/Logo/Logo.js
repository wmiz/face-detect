import React from "react";
import Tilt from "react-parallax-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0 gradient shadow-5" style={{ width: "150px" }}>
      <Tilt>
        <div
          className="pa3 flex justify-center items-center"
          style={{
            height: "150px",
            width: "150px",
            tiltMaxAngleX: "55",
            tiltMaxAngleY: "55",
            background: "none",
          }}
        >
          <FontAwesomeIcon
            icon={faBrain}
            style={{ fontSize: "100px", color: "white" }}
          ></FontAwesomeIcon>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
