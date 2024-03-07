import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import SplitType from "split-type";

const projects = [
  {
    name: "STOCK CHECKER",
    details:
      " A Stock Market App utilizing the Finnhub API to fetch real-time stock data.Integrated the ApexCharts library to create detailed and interactive stock charts. Implemented REST API methods using Axios to interact with the Finnhub API",
    src1: require("../Assets/Images/stocker1.png"),
    src2: require("../Assets/Images/stocker2.png"),
    year: "2023",
  },
  {
    name: "Toonify",
    details:
      "A research project on recognizing facial expressions by Deep learning algorithms of Convolutional Neural Networks and OpenCV with KERAS library",
    src1: require("../Assets/Images/Toonify1.png"),
    src2: require("../Assets/Images/toonify2.png"),
    year: "2022",
  },

  {
    name: "College quora",
    details:
      "A fully functional web application providing an exclusive online platform for college students to ask and answer questions with their academic community. Leveraging Firebase for secure user authentication. Implemented React components with state management Redux ",
    src1: require("../Assets/Images/stocker1.png"),
    src2: require("../Assets/Images/stocker2.png"),
    year: "2022",
  },
];

const Work = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  const heading = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //Splitype heading animation

    const text = new SplitType(heading.current, { types: "chars" });

    gsap.set(heading.current, { autoAlpha: 1 });
    gsap.set(text.chars, { yPercent: 100 });

    gsap.to(text.chars, {
      yPercent: 0,
      ease: "sine.out",
      stagger: { from: "start", amount: 0.2, ease: "power1.out" },
      scrollTrigger: {
        trigger: heading.current,
        start: "top center",
      },
    });

    /** Work Image animation over scroll */

    const container = containerRef.current;

    projects.forEach((project, index) => {
      const section = container.children[index];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "top 80%",
          scrub: 1,
          // markers: true,
        },
      });

      tl.to(section.querySelector(".img1"), {
        y: "-25%",
        rotation: "6deg",
        ease: "none",
        duration: 0.1,
      });

      tl.to(
        section.querySelector(".img2"),
        {
          x: "-25%",
          y: "-75%",
          rotation: "-4deg",
          ease: "none",
          duration: 0.1,
        },
        "0"
      );

      const timelineForLine = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          top: "top 80%",
          end: "top 70%",
        },
      });

      timelineForLine.to(section.querySelector(".horizontal-line"), {
        css: {
          width: "100%",
        },
        transformOrigin: "left center",
        ease: "none",
      });
    });
  }, []);

  return (
    <div className="work" id="work">
      <div className="work-head">
        <h2 ref={heading} className="page-heading works">
          Selected works.
        </h2>
      </div>

      <div ref={containerRef} className="work-sections">
        {projects.map((project, index) => {
          return (
            <>
              <div className="work-section">
                <span className="year-section">
                  {project.year}{" "}
                  <span ref={lineRef} className="horizontal-line"></span>
                </span>
                <div className="work-container">
                  <div className="work-section-details">
                    <>
                      <h2 className="project-name">{project.name}</h2>
                      <p>{project.details}</p>
                    </>
                    <div className="visit-section">
                      <a href="sd" className="visit">
                        Visit site
                      </a>
                      <GoArrowUpRight className="arrow-upward" />
                    </div>
                  </div>
                  <div className="work-section-image">
                    <div className="images">
                      <img
                        className="image img1"
                        src={project.src1}
                        alt=""
                      ></img>
                      <img
                        className="image img2"
                        src={project.src2}
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
