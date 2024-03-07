import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const About = () => {
  const heading = useRef(null);
  const aboutDetailsLarge = useRef(null);
  const aboutDetailsSmall = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = [heading, aboutDetailsLarge, aboutDetailsSmall];

    textElements.forEach((ref) => {
      const textElement = ref.current;
      const text = new SplitType(textElement, { types: "chars" });

      gsap.set(textElement, { autoAlpha: 1 });
      gsap.set(text.chars, { yPercent: 100 });

      gsap.to(text.chars, {
        yPercent: 0,
        ease: "sine.out",
        stagger: { from: "start", amount: 0.2, ease: "power1.out" },
        scrollTrigger: {
          trigger: textElement,
          start: "top 90%",
          end: "bottom 90%",
        },
      });
    });
  }, []);

  return (
    <div data-scroll data-section className="about" id="about">
      <div data-scroll className="about-container">
        <div className="about-heading-section">
          <h2 ref={heading} className="page-heading about-heading">
            About me.
          </h2>
        </div>

        <div className="about-content-section">
          <div
            data-scroll
            data-scroll-speed="0.2"
            className="img-section"
          ></div>
          <div className="about-details-container">
            <div className="about-details large-text-section">
              <div className="large-text">
                <span>Creative Developer with a</span>
              </div>
              <div className="large-text">
                <span>Computer Science background,</span>
              </div>
              <div className="large-text">
                <span>Crafting immersive</span>
              </div>
              <div className="large-text">
                <span>experiences that combines</span>
              </div>
              <div className="large-text">
                <span>creativity and functionality.</span>
              </div>
            </div>
            <div className="about-details small-text">
              <span ref={aboutDetailsSmall}>
                Getting started in Frontend Developer and want to transit into
                creative developer gives me unique perspective and understanding
                in merging both visual aesthetics and modern technology
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
