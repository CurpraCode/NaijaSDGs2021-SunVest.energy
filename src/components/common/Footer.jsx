import React from "react";
import { ReactComponent as WhiteStar } from "../../components/assets/starwhite.svg";
import { ReactComponent as Social } from "../../components/assets/social.svg";
// import "./Sunvest.css";
import {Link} from "react-router-dom";

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
        <div className="menu">
          <h3>Main Menu</h3>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/how"><li>About</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
            <Link to="/signup"> <li>Sign Up</li></Link>
            <Link to="/login"> <li>Sign In</li></Link>
       
          </ul>
        </div>
        <div className="contact">
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
