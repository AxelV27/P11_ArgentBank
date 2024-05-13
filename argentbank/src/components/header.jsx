import React from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import Logo from "../assets/images/argentBankLogo.png"
import '../css/components/header.css'

const usericon = <FontAwesomeIcon icon={faUserCircle} />

export default function Header () {
    return(
    <header>
    <h1 className="sr-only">Argent Bank</h1>
    <nav className="header__nav">
        <Link to="/">
        <img src={Logo} alt="Logo ArgentBank" className="header__logo"></img>
        </Link>
        <div className="header__deconnecte">
            <Link to="/login" >
                <i>{usericon}</i>
                <p>Sign In</p>
            </Link>
        </div>
    </nav>
    </header>
    )
}