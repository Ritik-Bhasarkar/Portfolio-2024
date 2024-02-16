import React from "react";
import Resume from "../Assets/Resume/resume.pdf";

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "Resume-PDF-File";
    link.href = Resume;
    link.click();
  };

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-name-plate">
          <div className="hero-name">
            <h1 className="hero-name-pronouns">Hi there, I'm</h1>
            <h1 className="hero-name-name">Ritik Bhasarkar .</h1>
          </div>
          <div className="hero-name-info">
            <h3 className="hero-name-position">
              A Frontend Developer and Designer propelling imagination to
              reality
            </h3>
          </div>
        </div>
      </div>
      <div className="hero-round-thing">
        <svg id="rotatingText" viewBox="0 0 200 200" width="140" height="140">
          <defs>
            <path
              id="circle"
              d="M 100, 100
            m -75, 0
            a 75, 75 0 1, 0 150, 0
            a 75, 75 0 1, 0 -150, 0
            "
            ></path>
          </defs>

          <text width={"400"}>
            <textPath
              alignmentBaseline="top"
              xlinkHref="#circle"
              className="text"
            >
              Take a look at my Resume--
            </textPath>
          </text>
        </svg>
        <button className="resume-download" onClick={handleDownload}>
          <text className="rb-text">R.</text>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
