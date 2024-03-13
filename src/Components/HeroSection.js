import React, { useEffect, useRef } from "react";
import Resume from "../Assets/Resume/Ritik-Bhasarkar.pdf";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "Ritik-Bhasakar-Resume";
    link.href = Resume;
    link.click();
  };

  const pronounRef = useRef(null);
  const nameRef = useRef(null);
  const positionRef = useRef(null);

  const namePlateRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = [pronounRef, nameRef];

    textElements.forEach((ref, index) => {
      const textElement = ref.current;
      const text = new SplitType(textElement, { type: "chars" });
      gsap.set(textElement, { autoAlpha: 1 });
      gsap.set(text.chars, { yPercent: 100 });

      gsap.to(text.chars, {
        yPercent: 0,
        ease: "sine.out",
        stagger: { from: "start", amount: 0.2, ease: "power1.out" },
        // onComplete: fadeOutAnimation(textElement),
      });
    });

    //animation for position text with delay

    const positionRefText = new SplitType(positionRef.current, {
      type: "chars",
    });
    gsap.set(positionRef.current, { autoAlpha: 1 });
    gsap.set(positionRefText.chars, { yPercent: 250 });

    gsap.to(positionRefText.chars, {
      yPercent: 0,
      ease: "sine.out",
      stagger: { from: "start", amount: 0.1, ease: "power1.out" },
      delay: 0.5,
      // onComplete: fadeOutAnimation(positionRef.current),
      onComplete: fadeOutAnimation,
    });

    function fadeOutAnimation() {
      gsap.to(namePlateRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: namePlateRef.current,
          start: "55% center",
          end: "+=250",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div data-scroll data-section className="hero-section">
      <div className="hero-container">
        <div
          ref={namePlateRef}
          data-scroll
          data-scroll-speed="-0.2"
          className="hero-name-plate"
        >
          <div className="hero-name">
            <h1 ref={pronounRef} className="hero-name-pronouns">
              Hi there, I'm
            </h1>
            <h1 ref={nameRef} className="hero-name-name">
              Ritik Bhasarkar.
            </h1>
          </div>
          <div className="hero-name-info">
            <h3 ref={positionRef} className="hero-name-position">
              A frontend developer and web designer <br /> propelling
              imagination to reality
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
