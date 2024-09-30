import React, {useState} from 'react';
import './LoginRegistration.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";




const LoginRegistration = () => {

    const [action, setAction] = useState('');
    const registerLink = () =>{
        setAction(' active')
    }

    const loginLink = () =>{
        setAction('')
    }


    return(
        <div className={`wrapper${action}`}>
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
                    <p> Dont have an account?<a href="#" onClick={registerLink}>SignUp</a></
                        p>
                </form>
            </div>


            <div className="form-box signup">
                <form action="">
                    <h1> Bee_Jays App </h1>
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
                    <div className="input-box">
                        <input type="text"
                               placeholder='FirstName' required/>
                        <FaUserTag className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="text"
                               placeholder='LastName' required/>
                        <FaUserTag className="icon"/>
                    </div>
                    <div className="remember-forgot">
                        <label> <input type="checkbox"/>
                            I agree to the terms & conditions?
                        </label>
                    </div>

                    <button type="submit">SignUp</button>

                    <div className="register-link"></div>
                    <p> Already have an account?<a href="#" onClick={loginLink} >Login</a></p>
                </form>
            </div>

        </div>

        // <div></div>
    );
};

export default LoginRegistration;