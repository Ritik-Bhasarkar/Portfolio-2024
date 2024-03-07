import React, { useState, useRef, useEffect } from "react";
import Hamburger from "./Hamburger";
import gsap from "gsap";

const Header = () => {
  //state for menu
  const [state, setState] = useState({
    initial: false, //this will tell if the hamburger menu is loaded which is false initially
    clicked: null, //menu is not clicked so no value at first thatswhy null
    menuName: "Menu",
  });

  const [disabled, setDisabled] = useState(false);

  //determine if menu should be disabled

  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 800);
  };

  const handleMenu = () => {
    disabledMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  const spanRefBar1 = useRef(null);
  const spanRefBar2 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(spanRefBar1.current, {
      rotation: state.clicked ? 45 : 0,
      duration: 0.1,
    }).to(spanRefBar2.current, {
      rotation: state.clicked ? -45 : 0,
      duration: 0.1,
    });

    tl.play();
  }, [state]);

  return (
    <header className="header" id="header">
      <div className="inner-header">
        <div className="header-logo">HRB.</div>
        <div className="menu-wrapper">
          <div
            className="menu-toggle btn"
            id="toggle-btn"
            disabled={disabled}
            onClick={handleMenu}
          >
            <div className="btn-outline btn-outline-1"></div>
            <div className="btn-outline btn-outline-2"></div>
            <div className="menu-toggle-bar">
              <span
                className="toggle-span toggle-span-1"
                ref={spanRefBar1}
              ></span>
              <span
                className="toggle-span toggle-span-2"
                ref={spanRefBar2}
              ></span>
            </div>
          </div>
        </div>
      </div>

      <Hamburger state={state} />
    </header>
  );
};

export default Header;
