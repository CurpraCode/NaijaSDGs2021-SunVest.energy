import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import house from "../components/assets/house.png";
import {ReactComponent as Top1} from "../components/assets/top1.svg";
import {ReactComponent as Top2} from "../components/assets/top2.svg";
import {ReactComponent as Top3} from "../components/assets/top3.svg";
import {ReactComponent as Other1} from "../components/assets/other1.svg";
import {ReactComponent as Other2} from "../components/assets/other2.svg";
import {ReactComponent as Other3} from "../components/assets/other3.svg";
import {ReactComponent as Other4} from "../components/assets/other4.svg";
import {ReactComponent as Other5} from "../components/assets/other5.svg";
import {ReactComponent as Other6} from "../components/assets/other6.svg";
import {ReactComponent as Feat1} from "../components/assets/feat1.svg";
import {ReactComponent as Feat2} from "../components/assets/feat2.svg";
import {ReactComponent as Feat3} from "../components/assets/feat3.svg";


function Marketplace() {
  return (
    <div>
      <Header />
      <div className="flex-image">
        <img src={house} alt="house" />
        <div>
          <h2>MarketPlace</h2>
          <h4>Let's find a solar project <br/>
          that's perfect for you</h4>
          <p>We are having to help you find right the <br/> 
          place for your energy investment </p>
        </div>
      </div>
      <div>
        <p>Top Selling</p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <Top1/>
              <div className="card-body">
                <h5 className="card-title">Sign Up</h5>
                <p className="card-text">
                  Sign up with your details choose a project from the market
                  place, select the number of units you would like to find and
                  own a part of them proceed to make cryptocurrency or normal
                  currency. You can invest from anywhere in the world
                </p>
                <button type="button" class="btn btn-primary">
                  Primary
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
            <Top2/>
              <div className="card-body">
                <h5 className="card-title">Power a business</h5>
                <p className="card-text">
                  Your investments goes into developing solar power
                  infrastructure for malls, small business, schools hospital, as
                  station and industries.beneficiary development phases on a
                  personalised dashboard via or web and mobile platforms.
                </p>
                <button type="button" class="btn btn-primary">
                  Primary
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
            <Top3/>
              <div className="card-body">
                <h5 className="card-title">Earn a Profit</h5>
                <p className="card-text">
                  You earn a guaranteed return on investment when you invest on
                  SunVest. Upon solar project installation and commissioning the
                  project beneficiary development phases on a personalised
                  dashboard via or web and mobile platforms.
                </p>
                <button type="button" class="btn btn-primary">
                  Primary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Featured Project</p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <Feat1/>
              <div className="card-body">
                <h5 className="card-title">Sign Up</h5>
                <p className="card-text">
                  Sign up with your details choose a project from the market
                  place, select the number of units you would like to find and
                  own a part of them proceed to make cryptocurrency or normal
                  currency. You can invest from anywhere in the world
                </p>
                <button type="button" class="btn btn-primary">
                  Primary
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
            <Feat2/>
              <div className="card-body">
                <h5 className="card-title">Power a business</h5>
                <p className="card-text">
                  Your investments goes into developing solar power
                  infrastructure for malls, small business, schools hospital, as
                  station and industries.beneficiary development phases on a
                  personalised dashboard via or web and mobile platforms.
                </p>
                <button type="button" class="btn btn-primary">
                  Primary
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
            <Feat3/>
              <div className="card-body">
                <h5 className="card-title">Earn a Profit</h5>
                <p className="card-text">
                  You earn a guaranteed return on investment when you invest on
                  SunVest. Upon solar project installation and commissioning the
                  project beneficiary development phases on a personalised
                  dashboard via or web and mobile platforms.
                </p>
                <button type="button" class="btn btn-primary">
                  Primary
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Other Projects</p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
              <Other1/>
                <div className="card-body">
                  <h5 className="card-title">Sign Up</h5>
                  <p className="card-text">
                    Sign up with your details choose a project from the market
                    place, select the number of units you would like to find and
                    own a part of them proceed to make cryptocurrency or normal
                    currency. You can invest from anywhere in the world
                  </p>
                  <button type="button" class="btn btn-primary">
                    Primary
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
              <Other6/>
                <div className="card-body">
                  <h5 className="card-title">Power a business</h5>
                  <p className="card-text">
                    Your investments goes into developing solar power
                    infrastructure for malls, small business, schools hospital,
                    as station and industries.beneficiary development phases on
                    a personalised dashboard via or web and mobile platforms.
                  </p>
                  <button type="button" class="btn btn-primary">
                    Primary
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
              <Other2/>
                <div className="card-body">
                  <h5 className="card-title">Earn a Profit</h5>
                  <p className="card-text">
                    You earn a guaranteed return on investment when you invest
                    on SunVest. Upon solar project installation and
                    commissioning the project beneficiary development phases on
                    a personalised dashboard via or web and mobile platforms.
                  </p>
                  <button type="button" class="btn btn-primary">
                    Primary
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
              <Other3/>
                <div className="card-body">
                  <h5 className="card-title">Earn a Profit</h5>
                  <p className="card-text">
                    You earn a guaranteed return on investment when you invest
                    on SunVest. Upon solar project installation and
                    commissioning the project beneficiary development phases on
                    a personalised dashboard via or web and mobile platforms.
                  </p>
                  <button type="button" class="btn btn-primary">
                    Primary
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
              <Other4/>
                <div className="card-body">
                  <h5 className="card-title">Earn a Profit</h5>
                  <p className="card-text">
                    You earn a guaranteed return on investment when you invest
                    on SunVest. Upon solar project installation and
                    commissioning the project beneficiary development phases on
                    a personalised dashboard via or web and mobile platforms.
                  </p>
                  <button type="button" class="btn btn-primary">
                    Primary
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
              <Other5/>
                <div className="card-body">
                  <h5 className="card-title">Earn a Profit</h5>
                  <p className="card-text">
                    You earn a guaranteed return on investment when you invest
                    on SunVest. Upon solar project installation and
                    commissioning the project beneficiary development phases on
                    a personalised dashboard via or web and mobile platforms.
                  </p>
                  <button type="button" class="btn btn-primary">
                    Primary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Marketplace;
