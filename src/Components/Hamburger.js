import React, { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import gsap from "gsap";
import { CiGlobe } from "react-icons/ci";

const Hamburger = ({ state }) => {
  //vars for animated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);

  useEffect(() => {
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
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //open menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });

      gsap.to([revealMenu, revealMenuBackground], {
        height: "100%",
        duration: 0,
        opacity: 1,
      });
      staggerReveal(revealMenuBackground, revealMenu);
    }
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

  const handleLinkClick = () => {
    //close Menu
    menu.style.display = "none";
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="hamburger-container">
          <div className="hamburger-wrapper">
            <nav>
              <ul className="nav-items">
                <li>
                  <Link className="text" onClick={handleLinkClick} to="#about">
                    ABOUT <span>KNOW ME</span>
                  </Link>
                </li>
                <li>
                  <Link className="text" onClick={handleLinkClick} to="#work">
                    WORK <span>SEE EVERTHING</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text"
                    onClick={handleLinkClick}
                    to="#contact"
                  >
                    CONTACT <span>SEND ME A FAX</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="nav-footer">
          <div className="current-date-time">
            <div className="current-time-global">
              <CiGlobe />
            </div>
            <div className="current-time">NEW DELHI 8.03</div>
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
