import React, {useEffect} from "react";
import {useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { loginSuccess, logOut, checktoken } from "../redux/features/authSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/images/argentBankLogo.webp"
import '../css/components/header.css'

const usericon = <FontAwesomeIcon icon={faUserCircle} />
const signOutIcon = <FontAwesomeIcon icon={faSignOut}/>

export default function Header () {
    // Extrait la valeur isAuthenticated depuis le store redux
    const isAuthenticated = useSelector((state)=> state.authen.isAuthenticated);
    const dispatch = useDispatch();
    // extrait le profile de l'utilisateur depuis le store redux
    const userProfile = useSelector((state)=> state.profile );
    const handleLogOut = () => {
        dispatch(logOut()) // utilise l'action dispatch pour la deconnexion
    };
    // Verifie la présence du token 
    useEffect(()=>{
        const token = checktoken
        if(token){
            dispatch(loginSuccess({token})); // Recupère le token
        }
    }, [dispatch]);

    return(
    <header>
    <h1 className="sr-only">Argent Bank</h1>
    <nav className="header__nav">
        <Link to="/">
        <img src={Logo} alt="Logo ArgentBank" className="header__logo"></img>
        <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isAuthenticated ? (
            <div className="header__connecte">
                <Link to="/profile">
                    <i>{usericon}</i>
                    {userProfile && userProfile.userName ? userProfile.userName : 'Loading...'}
                    {console.log(userProfile)} 
                </Link>
                <Link to='/' onClick={handleLogOut}>
                    <i>{signOutIcon}</i>
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