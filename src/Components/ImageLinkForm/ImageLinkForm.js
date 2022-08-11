import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {"This magic brain will detect faces in your pictures. Give it a try"}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center bn" type="text" />
          <button className="w-30 pa2 grow f4 link ph3 pv dib white bg-light-purple bn">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
