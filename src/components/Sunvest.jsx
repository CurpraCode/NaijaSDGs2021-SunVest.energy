import React from "react";
import "./Sunvest.css";

function Sunvest() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid " id="navbard">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div >
       <div className="bg-env">
       <div className="group-side">
          <div>
            <p>Top energy investment company</p>
            <h1>
              Invest in Solar, <br /> Empower A business <br /> Earn a Profit.
            </h1>
            <h3>
              Join us in the resolution to help Nigerian <br /> businesses
              escape power problems and <br /> run more profitably.
            </h3>

            <p>Learn more</p>
          </div>

          <div>
            <form className="was-validated">
              <div className="mb-3">
                <label for="validationTextarea" className="form-label">
                  Get Started Now
                </label>
              </div>

              <div className="form-check">
                <input
                  type="text"
                  class="form-control"
                  id="validationFormCheck2"
                  placeholder="tunde wale"
                  required
                />
              </div>
              <div className="form-check">
                <input
                  type="email"
                  class="form-control"
                  id="validationFormCheck2"
                  placeholder="name@example.com"
                  required
                />
              </div>
            
              <div className="form-check">
                <input
                  type="number"
                  class="form-control"
                  id="validationFormCheck2"
                  placeholder="phone number"
                  required
                />
              </div>
              <div className="form-check">
                <input
                  type="name"
                  class="form-control"
                  id="validationFormCheck2"
                  placeholder="company"
                  required
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" type="submit" disabled>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
       </div>
        </div>
        <div className="center-text">
          <img src="" alt="" />
          <div>
            <h2>SunVest</h2>
            <p>
              SunVest is a digital crowdfunding web and mobile platform that
              provides distributed finance for commercial and industrial (C&I)
              scale projects development and ownership
            </p>
            <p>Learn more</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sign Up</h5>
                <p className="card-text">
                  Sign up with your details choose a project from the market
                  place, select the number of units you would like to find and
                  own a part of them proceed to make cryptocurrency or normal
                  currency. You can invest from anywhere in the world
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Power a business</h5>
                <p className="card-text">
                  Your investments goes into developing solar power
                  infrastructure for malls, small business, schools hospital,
                  as station and industries.beneficiary development phases on a personalised dashboard via or web and mobile platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Earn a Profit</h5>
                <p className="card-text">
                  You earn a guaranteed return on investment when you invest on
                  SunVest. Upon solar project installation and commissioning the
                  project beneficiary development phases on a personalised
                  dashboard via or web and mobile platforms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="div-center">
          <h2>Let's Explore the Investments that are top-sellings</h2>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Commercial Projects
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Industrial Project
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Capital Projects
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div
                id="carouselExampleControlsNoTouching"
                className="carousel slide"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div
                id="carouselExampleControlsNoTouching"
                className="carousel slide"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div
                id="carouselExampleControlsNoTouching"
                className="carousel slide"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Move a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Earn a Profit</h5>
                          <p className="card-text">
                            You earn a guaranteed return on investment when you
                            invest on SunVest. Upon solar project installation
                            and commissioning the project beneficiary
                            development phases on a personalised dashboard via
                            or web and mobile platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="set-div">
        <h3>Working with us are the path to success</h3>
        <p>
          Get updated and news on all the new investments for free and enjoy our
          platform <br />
          with the support of our professional onboarding team.{" "}
        </p>
      </div>
      <div className="footer">
        <div className="flex-footer">
          <div>
            <h3>SunVest Energy</h3>
            <p>
              Join us in the revolution to help Nigerian businesses escape power
              protection and run more profitably.
            </p>
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
    </div>
  );
}

export default Sunvest;
