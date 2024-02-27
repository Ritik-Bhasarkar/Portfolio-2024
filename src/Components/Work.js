import React from "react";

import Image1 from "../Assets/Images/imageOne.jpg";
import Image2 from "../Assets/Images/pic-2.jpg";
import Image3 from "../Assets/Images/pic-3.jpg";
import Image4 from "../Assets/Images/pic-4.jpg";

const Work = () => {
  const projects = [
    {
      title: "College-Quora",
      src: `${Image1}`,
      color: "brown",
    },
    {
      title: "Fin Stock",
      src: `${Image2}`,
      color: "#fff",
    },
    {
      title: "Tonnify",
      src: `${Image3}`,
      color: "#fff",
    },
    {
      title: "Manage",
      src: `${Image4}`,
      color: "#fff",
    },
  ];

  return (
    <div className="work" id="work">
      <div className="work-head">
        <h2 className="page-heading works">Selected works.</h2>

        <div className="project-galary">
          <div className="project">
            {projects.map((project, index) => {
              return (
                <div className="project-info" key={index}>
                  <div className="project-title">
                    <h2>{project.title}</h2>
                    <span className="project-titleMark">
                      Design and Developement
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
