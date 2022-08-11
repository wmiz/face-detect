import React, { Component } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particleOptions";
import Clarifai from "clarifai";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";

const app = new Clarifai.App({
  apiKey: "d10d5980c1f94efcaa606ef5603ca44d",
});

const particlesInit = async (main) => {
  // console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(main);
};

const particlesLoaded = (container) => {
  // console.log(container);
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgURL: "",
      box: {},
    };
  }

  calculateFaceLocation = (data) => {
    console.log(data);
    const bounding_box =
      data.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById("inputimage");

    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: bounding_box.left_col * width,
      topRow: bounding_box.top_row * height,
      rightCol: width - bounding_box.right_col * width,
      botRow: height - bounding_box.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    this.setState({ imgURL: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((res) => this.calculateFaceLocation(res))
      .then((box) => this.displayFaceBox(box))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
        />
        <div className="content">
          <Navigation></Navigation>
          <Logo></Logo>
          <Rank></Rank>
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}
          ></ImageLinkForm>
          <FaceRecognition
            box={this.state.box}
            imgURL={this.state.imgURL}
          ></FaceRecognition>
        </div>
      </div>
    );
  }
}

export default App;
