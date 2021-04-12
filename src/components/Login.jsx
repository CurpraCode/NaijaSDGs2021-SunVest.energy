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
               <div className="form-check">
                 <input
                   type="email"
                   class="form-control"
                   id="validationFormCheck2"
                   placeholder="Company Name"
                   required
                   
                 />
               </div>
               <div className="form-check">
                 <input
                   class="form-control"
                   id="validationFormCheck2"
                   placeholder="password"
                   type="password"
                   required
                 />
               </div>
           
               <div className="mb-1">
                 <button className="btn btn-primary" type="submit" >
                 <Link to="/signup">
                 Sign In
                    </Link>
                  
                 </button>
               </div>
               <div>
                  <p>
                  Don't have an account
                    <Link to="/signup">
                      <span>Sign Up</span>
                    </Link>
                  </p>
                  <p>
                  Forgotten password?
                    <Link to="/reset">
                      <span>Reset</span>
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
