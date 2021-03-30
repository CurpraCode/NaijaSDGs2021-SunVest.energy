import React from 'react';
import BodyFlex from "../components/common/BodyFlex";
import Header from "../components/common/Header";

function Login() {
    return (
        <div className="bg-env">
            <Header/>
        <div className="group-side">
          <BodyFlex/>
 
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
    )
}

export default Login
