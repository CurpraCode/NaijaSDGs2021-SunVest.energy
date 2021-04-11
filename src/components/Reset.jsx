import React from "react";
import BodyFlex from "../components/common/BodyFlex";
import Header from "../components/common/Header";


function Login() {
  return (
    <div className="bg-env">
      <Header />
      <div className="group-side">
        <BodyFlex />

        <div>
          <form className="was-validated">
           
            <div className="form-check">
              <input
                type="email"
                class="form-control"
                id="validationFormCheck2"
                placeholder="email"
                required
              />
            </div>

            <div className="mb-1">
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
