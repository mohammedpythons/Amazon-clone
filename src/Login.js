import { Link, useHistory } from "react-router-dom";
import React, { useState } from 'react'
import "./Login.css";
import { auth } from "./firebase";




function Login() {


const history = useHistory()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
    const login = (e) => {
        e.preventDefault(); // this stops the refresh!!!
        //do the login logic here
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            // ligged in, redirect to homepage
            history.push('/')

        })
        .catch(err => {
            alert(err.message)
        })
    }

    const register = (e) => {
        e.preventDefault(); // this stops the refresh!!!
        //do the register logic here
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            // created a user and logged in
            // ligged in, redirect to homepage
            history.push('/')

        })
        .catch(err => {
            alert(err.message)
        })

    }
    return (
        <div className="login">
            <Link to="/">
            <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="login-logo"
            />
            </Link>
            <div className="login__container">
                <form>
                <h1>Sign in</h1>
                <h5>Email</h5>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" />
                <h5>Password</h5>
                <input onChange={(e)=> setPassword(e.target.value)} type="password" />
                <button value={password} onClick={login} type="submit" className="login__SignInButton">Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={register}  className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
