import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import '../css/components/form.css';


const userIcon = <FontAwesomeIcon icon={faUserCircle} />

export default function Form (){
    return(
        <section className="sign-in-content">
            <i>{userIcon}</i>
            <h2>Sign In</h2>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password"
                        type="password"
                    />
                </div>
                <div className="input-remember">
                    <input 
                        id="remember-me"
                        type="checkbox"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button"> Sign In</button>
            </form>
        </section>
    )
}