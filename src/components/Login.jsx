import React, {useContext, useState} from 'react';
import BodyFlex from "../components/common/BodyFlex";
import Header from "../components/common/Header";
import {Link} from "react-router-dom";
import {AuthContext, SIGNIN} from "../context";
import {login} from "../queries/auth";
import {Redirect} from "react-router-dom";

function Login() {
  //const { register, handleSubmit } = useForm();
  const [passwordType, setPasswordType] = useState(true);

  const { authState, dispatch } = useContext(AuthContext);

  if (authState) {
    return <Redirect to="/" />;
  }

  const handleLogin = async (data) => {
    try {
      // setLoading(true);
      const res = await login(data);
      
      dispatch({ type: SIGNIN, payload: res.data });
      console.log(res);
    } catch (error) {
      console.log(error.response?.data?.message || 'Login failed');
    }
  };

    return (
        <div className="bg-env">
            <Header/>
        <div className="group-side">
          <BodyFlex/>
 
           <div>
             <form className="was-validated"  onSubmit={handleLogin}>
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
                   type={passwordType ? 'password' : 'text'}
                   onClick={() => setPasswordType(!passwordType)}
                   required
                 />
               </div>
           
               <div className="mb-1">
                 <button className="btn btn-primary" type="submit" >
                   Sign In
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
