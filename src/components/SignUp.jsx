import React from 'react';
import BodyFlex from "../components/common/BodyFlex";
import Header from "../components/common/Header";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="bg-env">
            <Header/>
        <div className="group-side">
          <BodyFlex/>
 
          <div>
              <form className="was-validated">
               
                  <p >
                    Get Started Now
                  </p>
             

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
                <div className="mb">
                  <button className="btn btn-primary" type="submit">
                    Sign Up
                  </button>
                </div>
                <div>
                  <p>
                    Have and account already
                    <Link to="login">
                      <span>Sign In</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
        </div>
         </div>
    )
}

export default Login
