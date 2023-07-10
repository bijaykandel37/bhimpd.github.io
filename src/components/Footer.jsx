import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Company<span>logo</span>
          </h3>

          <p class="footer-links">
            <a class="link-1">
              <Nav.Link href="/">Home</Nav.Link>
            </a>

            <a><Nav.Link href="/dashboard">Dashboard</Nav.Link></a>

            <a><Nav.Link href="/form">Form</Nav.Link></a>

            <a><Nav.Link href="/formdetails">Formdetails</Nav.Link></a>

            <a><Nav.Link href="/preview">Preview</Nav.Link></a>
          </p>

          <p class="footer-company-name">Company Name © 2015</p>
        </div>

        <div class="footer-center">
          <div>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#f2f2f3", paddingRight: "10px" }}
            />
            <p>
              <span>Kathmandu, Nepal</span>
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "#f2f2f3", paddingRight: "10px" }}
            />
            <p>+977 9814412345</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#f2f2f3", paddingRight: "10px" }}
            />
            <p>
              <a href="mailto:support@company.com">abc@gmail.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
