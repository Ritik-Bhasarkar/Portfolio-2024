import React from "react";

import { GoArrowUpRight } from "react-icons/go";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="page-heading contact-header">
        <span>Follow me and hit me up for future projects or a simple talk.</span>
      </div>

      <div className="contacts-boxes">
        <div className="contacts contact-1">
          <a
            className="footer-text"
            href="https://www.linkedin.com/in/ritik-bhasarkar/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
            <div className="clip-div">
              <span className="clip-container">
                <h3 className="clip-header">Linkedin</h3>Connect and share
                experience
              </span>
              <GoArrowUpRight className="arrow-icon" />
            </div>
          </a>
        </div>
        <div className="contacts contact-2">
          <a
            className="footer-text"
            href="https://github.com/Ritik-Bhasarkar"
            target="_blank"
            rel="noreferrer"
          >
            Github
            <div className="clip-div">
              <span className="clip-container">
                <h3 className="clip-header">Github</h3>
                Collaborate on GitHub, Innovate
              </span>
              <GoArrowUpRight className="arrow-icon" />
            </div>
          </a>
        </div>
        <div className="contacts contact-3">
          <a
            className="footer-text"
            href="mailto:ritikbhasarkar@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Gmail
            <div className="clip-div">
              <span className="clip-container">
                <h3 className="clip-header">Gmail</h3>
                Get in touch
                <GoArrowUpRight className="arrow-icon" />
              </span>
            </div>
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
