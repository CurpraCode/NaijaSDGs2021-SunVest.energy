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
                   type="text"
                   class="form-control"
                   id="validationFormCheck2"
                   placeholder="Company Name"
                   required
                 />
               </div>
               <div className="form-check">
                 <input
                   type="password"
                   class="form-control"
                   id="validationFormCheck2"
                   placeholder="name@example.com"
                   required
                 />
               </div>
           
               <div className="mb-1">
                 <button className="btn btn-primary" type="submit" disabled>
                   Sign In
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
