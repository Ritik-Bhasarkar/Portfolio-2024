import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import gsap from "gsap";
import { CiGlobe } from "react-icons/ci";

const Hamburger = ({ state, handleMenu }) => {
  const [date, setDate] = useState(new Date());

  //vars for animated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);

  let svgRef = useRef(null);
  let navRef1 = useRef(null);
  let navRef2 = useRef(null);
  let navRef3 = useRef(null);

  useEffect(() => {
    //time

    if (state.clicked === false) {
      //close menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
      gsap.to(svgRef.current, {
        x: "120%",
        duration: 0.3,
        ease: "sine.out",
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //open menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });

      gsap.to(svgRef.current, {
        x: "-10%",
        duration: 0.5,
        ease: "sine.in",
      });

      gsap.to([revealMenu, revealMenuBackground], {
        height: "100%",
        duration: 0,
        opacity: 1,
      });
      staggerReveal(revealMenuBackground, revealMenu);
      rotateContent([navRef1.current, navRef2.current, navRef3.current]);
    }

    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  const rotateContent = (...nodes) => {
    const tl = gsap.timeline();
    nodes.forEach((node, index) => {
      // Loop through each node with its index
      tl.fromTo(
        node,
        {
          rotationX: 90,
          opacity: 0,
          transformOrigin: "top",
        },
        {
          rotationX: 0,
          transformOrigin: "top",
          opacity: 1,
          stagger: { amount: 0.1, ease: "0.33, 1, 0.68, 1" },
          duration: 1,
          ease: "0.33, 1, 0.68, 1",
          delay: 0.3 + index * 0.2,
        }
      );
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="svg-lines">
          <svg
            ref={svgRef}
            width="68"
            height="68"
            onClick={handleMenu}
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.5 1.5L67 67" stroke="white" stroke-width="2px" />

            <path d="M66.5 1L0.999997 66.5" stroke="white" stroke-width="1px" />
          </svg>
        </div>
        <div className="hamburger-container">
          <div className="hamburger-wrapper">
            <nav>
              <ul className="nav-items">
                <li ref={navRef1}>
                  <Link className="text" onClick={handleMenu} to="#about">
                    ABOUT <span>KNOW ME</span>
                  </Link>
                </li>
                <li ref={navRef2}>
                  <Link className="text" onClick={handleMenu} to="#work">
                    WORK <span>SEE EVERTHING</span>
                  </Link>
                </li>
                <li ref={navRef3}>
                  <Link className="text" onClick={handleMenu} to="#contact">
                    CONTACT <span>SEND ME A FAX</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="nav-footer">
          <div className="current-time-section">
            <div className="current-time">
              <CiGlobe className="globe" />
              <div>
                INDIA - {date.toLocaleTimeString("en-GB")}
              </div>
            </div>
          </div>
          <div className="social-handles">
            <ul>
              <li className="li">
                <a
                  href="https://drive.google.com/file/d/1HNqkb0QCtlhWjZ0lMb3vsgUCSG-krEOw/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  RESUME
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ritik-bhasarkar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LN
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ritik-Bhasarkar"
                  target="_blank"
                  rel="noreferrer"
                >
                  GT
                </a>
              </li>
              <li>
                <a
                  href="mailto:ritikbhasarkar@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  GM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
