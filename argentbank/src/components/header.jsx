import React, {useEffect} from "react";
import {useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { loginSuccess, logOut } from "../redux/features/authSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import Logo from "../assets/images/argentBankLogo.png"
import '../css/components/header.css'

const usericon = <FontAwesomeIcon icon={faUserCircle} />

export default function Header () {
    const isAuthenticated = useSelector((state)=> state.authen.isAuthenticated);
    const dispatch = useDispatch();
    const userProfile = useSelector((state)=> state.profile );
    const handleLogOut = () => {
        dispatch(logOut())
    };
    useEffect(()=>{
        const token = localStorage.getItem('authenToken')
        if(token){
            dispatch(loginSuccess({token}));
        }
    }, []);

    return(
    <header>
    <h1 className="sr-only">Argent Bank</h1>
    <nav className="header__nav">
        <Link to="/">
        <img src={Logo} alt="Logo ArgentBank" className="header__logo"></img>
        <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isAuthenticated ? (
            <div className="header__deconnecte">
                <Link to="/profile">
                    <i>{usericon}</i>
                    {userProfile ? userProfile.userName : 'Load'} 
                </Link>
                <Link to='/' onClick={handleLogOut}>
                    <p>Sign Out</p>
                </Link> 
            </div>
        ):(
        <div className="header__deconnecte">
            <Link to="/login" >
                <i>{usericon}</i>
                <p>Sign In</p>
            </Link>
        </div>
        )}
    </nav>
    </header>
    )
}