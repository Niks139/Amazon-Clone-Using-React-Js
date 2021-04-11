import React from 'react'
import '../css/login.css'
import Logo from "../img/amazon.png";
const Registration = () => {
    return (
        <div className="login">
            <div className="container border">
                <img src={Logo} alt="Amazon Logo" className="my-3 image" width="100px" />
                    <div className="border mx-3 my-3">
                    <h1>Create Account</h1>
                    <div>
                    <form >
                    <div className="form-group ms-5">
                        <label>Your name</label>
                        <input type="text" className="form-control" required="required" />
                    </div>
                    <div class="form-group ms-5">
                        <label>Email</label>
                        <input type="email" class="form-control" required="required" />					
                    </div>
                    <div class="form-group ms-5">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Atleast 6 characters" required="required" minLength="6" />					
                    </div>
                    <div class="form-group ms-5">
                        <label>Re-enter password</label>
                        <input type="password" class="form-control" required="required" minLength="6"/>					
                    </div>
                    <div className="form-group d-flex ms-5 justify-content-evenly">
                    <button className="btn btn-success">Sign-In</button>
                    <a className="mt-2 f-pwd">Forgot password?</a>
                    </div>
                    </form>
                    <small className="ms-3 mr-3">By continuing, you agree to Amazon's <a href="#">Condintions of Use and Privacy Notice.</a></small>
                    <div class="form-check ms-5">
                        <input type="checkbox" value="" id="signin" />
                        <label class="form-check-label" for="sign-in">
                            Keep me signed In. Details <i class="fas fa-caret-down"></i>
                        </label>
                    </div>
                    <h5 className="hr__line">Already on amazon?</h5>
                    <div className="d-flex justify-content-evenly">
                        <a href="/login"><button className="btn btn-info mb-2"> Login </button></a>
                    </div>
                    </div>  
                    </div>
                    
            </div>
        </div>
    )
}

export default Registration
