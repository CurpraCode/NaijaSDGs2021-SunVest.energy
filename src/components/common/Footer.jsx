import React from "react";
import { ReactComponent as WhiteStar } from "../../components/assets/starwhite.svg";
import { ReactComponent as Social } from "../../components/assets/social.svg";
// import "./Sunvest.css";

function Footer() {
  return (
    <div className="footer">
      <div className="flex-footer">
        <div>
          <h3>
            <WhiteStar style={{ fill: "white" }} />
            SunVest Energy
          </h3>
          <p>
            Join us in the revolution to help Nigerian businesses escape power
            protection and run more profitably.
          </p>
          <Social />
        </div>
        <div>
          <h3>Main Menu</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <h4>Address</h4>
          <p>No.13, Abike Jologbola Street, Sholebo Estate Ikorodu, Lagos</p>
          <h4>Email</h4>
          <p>info@sunvest.energy</p>
          <h4>Address</h4>
          <p>+2349087342780</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
