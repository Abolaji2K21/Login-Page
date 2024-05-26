import React from 'react';
import './index.module.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";



const Login = () => {
    return(
        <div className="wrapper">
            <div className="form-box login">
                <form action="">
                    <h1> Login </h1>
                    <div className="input-box">
                        <input type="text"
                               placeholder='Username' required/>
                               <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password"
                               placeholder="Password" required/>
                              <FaLock className="icon"/>

                    </div>
                    <div className="remember-forgot">
                        <label> <input type="checkbox"/>
                            Remember me
                        </label>
                        <a href="#"> Forgot password</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link"></div>
                    <p> Dont have an account?<a
                      href="#">SignUp</a></p>
                </form>
            </div>
        </div>

    );
};

export default Login;