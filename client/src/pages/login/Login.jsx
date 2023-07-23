import React from 'react'
import "./login.css";

export default function Login() { 
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <div className="loginLogo">LatroTech</div>
                <div className="loginDesc">Connect with people and friend around the world on LatroTech.</div>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" placeholder='Email' className="loginInput" />
                    <input type="text" placeholder='Password' className="loginInput" />
                    <button className="loginButton">Log in </button>
                    <span className="forgotPassword">Forgot Password?</span>
                    <button className="signUp">Create a new account</button>
                </div>
            </div>
        </div>
    </div> 
  )
}
