import React from "react";

import HeroImage from "../../../../assets/images/hero-image.png";
import HeaderBg from "../../../../assets/images/header__bg.png";
import Button from "../../../common/Button";

import "./style.scss";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__content">
          <h3>HELLO, I’M MOHAMED INSHAF</h3>
          <h1>Full Stack Developer</h1>
          <h5>
            A <span className="text-highlight">highly motivated</span> and
            ambitious <span className="text-highlight">Computer Science</span>{" "}
            undergraduate. Quick learner with strong{" "}
            <span className="text-highlight">problem solving</span> skill. A
            team player, who is able to provide simple solutions to complex
            problems through creativity. I commit code to{" "}
            <a
              className="github"
              href="https://github.com/minshaf998"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github.
            </a>{" "}
            {/* Make videos on{" "}
            <a
              className="github"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Bikashweb.
            </a>{" "}
            And write articles on{" "}
            <a
              className="github"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium.
            </a> */}
          </h5>
          <a href="#recent-projects">
            <Button label="View projects" variant="outline" />
          </a>
        </div>
        {/* <div className="banner__image">
          <img src={HeroImage} alt="Bikash Sharma smiling" />
        </div> */}
      </div>
      <img
        src={HeaderBg}
        alt="code abstract background"
        className="banner__bg"
      />
    </div>
  );
};
export default Banner;
