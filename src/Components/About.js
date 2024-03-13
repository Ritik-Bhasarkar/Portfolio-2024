import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const About = () => {
  const heading = useRef(null);

  const aboutDetails = useRef(null);

  const smallTextRef = useRef(null);

  const largeTextRef1 = useRef(null);
  const largeTextRef2 = useRef(null);
  const largeTextRef3 = useRef(null);
  const largeTextRef4 = useRef(null);
  const largeTextRef5 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = [heading];

    textElements.forEach((ref) => {
      const textElement = ref.current;
      const text = new SplitType(textElement, { types: "chars" });

      gsap.set(textElement, { autoAlpha: 1 });
      gsap.set(text.chars, { yPercent: 100 });

      gsap.to(text.chars, {
        yPercent: 0,
        ease: "sine.out",
        stagger: { from: "start", amount: 0.2 },
        scrollTrigger: {
          trigger: textElement,
          start: "top center",
        },
      });
    });

    const largeTextElements = [
      largeTextRef1,
      largeTextRef2,
      largeTextRef3,
      largeTextRef4,
      largeTextRef5,
    ];

    largeTextElements.forEach((ref) => {
      const largeTextRef = ref.current;
      const largeText = new SplitType(largeTextRef, { types: "lines" });

      gsap.set(largeTextRef, { autoAlpha: 1 });
      gsap.set(largeText.lines, { yPercent: 100 });

      gsap.to(largeText.lines, {
        yPercent: 0,
        ease: "sine.out",
        duration: 0.5,
        stagger: { amount: 0.1 },
        scrollTrigger: {
          trigger: aboutDetails.current,
          start: "end center",
        },
      });
    });

    const smallText = new SplitType(smallTextRef.current, { types: "lines" });
    gsap.set(smallTextRef.current, { autoAlpha: 1 });
    gsap.set(smallText.lines, { yPercent: 400 });

    gsap.to(smallText.lines, {
      yPercent: 0,
      ease: "sine.out",
      duration: 0.5,
      stagger: { amount: 0.2 },
      scrollTrigger: {
        trigger: aboutDetails.current,
        start: "bottom center",
      },
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
            <div
              className="about-details large-text-section"
              ref={aboutDetails}
            >
              <div className="large-text">
                <span ref={largeTextRef1}>Creative developer with a</span>
              </div>
              <div className="large-text">
                <span ref={largeTextRef2}>computer science background,</span>
              </div>
              <div className="large-text">
                <span ref={largeTextRef3}>crafting immersive</span>
              </div>
              <div className="large-text">
                <span ref={largeTextRef4}>experiences that combines</span>
              </div>
              <div className="large-text">
                <span ref={largeTextRef5}>creativity and functionality.</span>
              </div>
            </div>
            <div className="about-details small-text-section">
              <div className="small-text">
                <span ref={smallTextRef}>
                  Getting started in Frontend Developer and want <br /> to
                  transit into creative developer gives me unique <br />
                  perspective and understanding in merging both
                  <br /> visual aesthetics and modern technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
