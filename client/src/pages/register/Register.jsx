import React from 'react'
import "./register.css";

export default function Register() { 
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <div className="loginLogo">LatroTech</div>
                <div className="loginDesc">Connect with people and friend around the world on LatroTech.</div>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" placeholder='UserName' className="loginInput" />
                    <input type="text" placeholder='Email' className="loginInput" />
                    <input type="password" placeholder='Password' className="loginInput" />
                    <input type="password" placeholder='Enter Password again' className="loginInput" />
                    <button className="loginButton">Sign Up </button>
                  
                    <button className="signUp">Log into Account</button>
                </div>
            </div>
        </div>
    </div> 
  )
}
