import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import SplitType from "split-type";

const projects = [
  {
    name: "Toonify",
    details:
      "A research project on recognizing facial expressions by Deep learning algorithms of Convolutional Neural Networks and OpenCV with KERAS library",
    src1: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src2: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "STOCK CHECKER",
    details:
      " A Stock Market App utilizing the Finnhub API to fetch real-time stock data.Integrated the ApexCharts library to create detailed and interactive stock charts. Implemented REST API methods using Axios to interact with the Finnhub API",
    src1: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src2: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "College-quora",
    details:
      "A fully functional web application providing an exclusive online platform for college students to ask and answer questions with their academic community. Leveraging Firebase for secure user authentication. Implemented React components with state management Redux ",
    src1: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src2: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


const Work = () => {
  const containerRef = useRef(null);

  const heading = useRef(null)

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    //heading rotation - >

    gsap.registerPlugin(ScrollTrigger);

    const text = new SplitType(heading.current, { types: "chars" });

    gsap.set(heading.current, { autoAlpha: 1 });
    gsap.set(text.chars, { yPercent: 100 });

    const initialAnimation = gsap.to(text.chars, {
      yPercent: 0,
      ease: "sine.out",
      stagger: { from: "center", amount: 0.2, ease: "power1.out" },
      scrollTrigger: {
        trigger: heading.current,
        start: "top 90%",
        end: "bottom 90%",
      },
    });











    const container = containerRef.current;

    projects.forEach((project, index) => {
      const section = container.children[index];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "bottom 98%",
          end: "bottom 90%",
          scrub: 1,
        },
      });
      tl.to(section.querySelector(".img1"), {
        y: "-25%",
        rotation: "6deg",
        duration: 0.3,
      });
      tl.to(
        section.querySelector(".img2"),
        {
          x: "-25%",
          y: "-75%",
          duration: 0.3,
          rotation: "-4deg",
        },
        "0"
      );
    });
  }, []);

  return (
    <div className="work" id="work">
      <div className="work-head">
        <h2 ref={heading} className="page-heading works">Selected works.</h2>
      </div>

      <div ref={containerRef} className="work-sections">
        {projects.map((project, index) => {
          return (
            <div className="work-section">
              <div className="work-section-details">
                <h2 className="project-name">{project.name}</h2>
                <p>{project.details}</p>
                <div className="visit-section">
                  <a href="sd" className="visit">
                    Visit site
                  </a>
                  <GoArrowUpRight className="arrow-upward" />
                </div>
              </div>
              <div className="work-section-image">
                <img className="image img1" src={project.src1} alt=""></img>
                <img className="image img2" src={project.src2} alt=""></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
