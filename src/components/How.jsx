import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { ReactComponent as Man } from "../components/assets/Man.svg";
import { ReactComponent as Moneyman } from "../components/assets/moneyman.svg";
import { ReactComponent as CartMan } from "../components/assets/cartman.svg";
import {Link} from "react-router-dom";

function How() {
  return (
    <div>
      <Header />
      <div className="open-boxed">
        <p className="p-text">Learn More About Us & The Investments</p>
      </div>
      <div className="flex-us">
        <div>
          <h3>Who We Are</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            dolorem maiores nostrum odit repudiandae sint cumque esse atque
            eligendi ut repellat, architecto quisquam earum accusantium et magni
            tempora expedita. Natus.
          </p>
        </div>
        <div>
          <h3>What We do</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            dolorem maiores nostrum odit repudiandae sint cumque esse atque
            eligendi ut repellat, architecto quisquam earum accusantium et magni
            tempora expedita. Natus.
          </p>
        </div>
      </div>
      <div className="flex-uss">
        <h2>The Easy Steps</h2>
        <p>Take this simple steps to becoming a millionaira</p>
        <div className="flex-svg">
          <div>
            <h2>Signin Up</h2>
            <p>
              Sign up with your details, choose a project from the market place, <br/>
                 select the number of units you would like to fund and own a part    <br/>
              of, then proceed to make payments with normal currency or    <br/>
   cryptocurreny. You can invest from anywhere in the world !
            </p>
          </div>

          <Man className="svg-img"  />
        </div>
        <div className="flex-svg">
          <div>
            <h2>Powering A business</h2>
            <p>
              Your investments goes into developing solar power infrastructure    <br/>
              for malls, small businesses, schools, hospotals, gasstations and    <br/>
             industries. Without your investment, these businesses would be    <br/>
              running on expensive generators and unreliable power supply from
              the National grid
            </p>
          </div>

          <Moneyman className="svg-img"  />
        </div>

        <div className="flex-svg">
          <div>
            <h2>Earning A Profit</h2>
            <p>
              You earn a guaranteed return on investment when you invest on    <br/>
              SunVest. Upon solar project installation and commissioning, the    <br/>
              project beneficiary ( e.g a mall, a school or a factory) pays back    <br/>
              through electricity purchase through our Energy As A Service    <br/>
              (EaaS) platform, or through the Lease to Own (LtO) model. You also    <br/>
              get updates on the project development phases on a personalised    <br/>
              dashboard via our web and mobile platforms.
            </p>
          </div>

          <CartMan className="svg-img" />
        </div>
        <div>
          <h2>Let Get Started for Free</h2>
          <Link to="/signup">
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default How;
