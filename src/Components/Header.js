import React, { useState } from "react";
import Hamburger from "./Hamburger";
import { HashLink as Link } from "react-router-hash-link";

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


  return (
    <header className="header" id="header">
      <div className="inner-header">
        <div className="header-logo">
          <Link to={'#'}>
            RDB.
          </Link>
          </div>
        <div className="menu-wrapper">
          <div
            className="menu-toggle btn"
            id="toggle-btn"
            disabled={disabled}
            onClick={handleMenu}
          >
            <div className="toggle-background-color"></div>
            <svg
              className="svg-header"
              width="56"
              height="7"
              viewBox="0 0 56 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="56"
                y1="0.5"
                x2="4.37114e-08"
                y2="0.500005"
                stroke="white"
                stroke-width="2px"
              />

              <line
                x1="56"
                y1="6.5"
                x2="28"
                y2="6.5"
                stroke="white"
                stroke-width="2px"
              />
            </svg>
          </div>
        </div>
      </div>

      <Hamburger state={state} handleMenu={handleMenu} />
    </header>
  );
};

export default Header;
