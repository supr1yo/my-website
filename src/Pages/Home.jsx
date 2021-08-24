import React from "react";
import NavBar from "../Components/Navbar";
import Fade from "react-reveal/Fade";
import { Button, Image } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="intro">
        <Fade bottom>
        <Image id="logo" src="./Supriyo.jpg" width='200px' rounded />
          <h1>Supriyo's Website</h1>
        </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
