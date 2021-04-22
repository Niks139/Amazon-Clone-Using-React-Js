import React from 'react'
import '../css/login.css'
import Logo from "../img/amazon.png";
import { useForm } from "react-hook-form";
import { useHistory} from "react-router-dom";
import axios from "axios";
function Login() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    let history = useHistory(); 

    
    const login= (data) => 
    {
        axios.post('http://localhost:5000/users/login',{
            email: data.email,
            password: data.password
        })
        .then((response) => 
        {
            console.log(response);
            history.push("/");
        });
    }

    return (
        <div className="login">
            <div className="container border">
                <img src={Logo} alt="Amazon Logo" className="my-3 image" width="100px" />
                    <div className="border mx-3 my-3">
                    <h1>Sign-In</h1>
                    <div>
                    <form onSubmit={handleSubmit(login)} >
                    <div className="form-group d-flex ms-5">
                        <span className="user-icon">
                        <i className="fas fa-user"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Enter Email Id" {...register("email", { required: true})} />
                    </div>
                    <div class="form-group d-flex ms-5">
                        <span className="user-icon"><i class="fas fa-unlock"></i></span>
                        <input type="password" class="form-control" placeholder="Enter Password" {...register("password", { required: true})}/>					
                    </div>
                    <div className="form-group d-flex ms-5 justify-content-evenly">
                    <button className="btn btn-success" type="submit">Sign-In</button>
                    <a className="mt-2 f-pwd">Forgot password?</a>
                    </div>
                    <small className="ms-3 mr-3">By continuing, you agree to Amazon's <a href="#">Conditions of Use and Privacy Notice.</a></small>
                    <div class="form-check ms-5">
                        <input type="checkbox" value="" id="signin" />
                        <label class="form-check-label" for="sign-in">
                            Keep me signed In. Details <i class="fas fa-caret-down"></i>
                        </label>
                    </div>
                    </form>
                    
                    <h5 className="hr__line">New to amazon?</h5>
                    <div className="d-flex justify-content-evenly">
                        <a href="/registration"><button className="btn btn-info mb-2"> Create your amazon </button></a>
                    </div>
                    </div>  
                    </div>
                    
            </div>
        </div>
        
    )
}

export default Login;
