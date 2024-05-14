import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import '../css/components/form.css';
import { loginSuccess } from "../redux/features/authSlice";


const userIcon = <FontAwesomeIcon icon={faUserCircle} />

export default function Form (){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email : email,
            password: password,
        };

        try{
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if(response.ok){
                const responseData = await response.json()
                const token = responseData.body.token
                localStorage.setItem('authenToken', token)
                navigate('/profile')
                dispatch(loginSuccess({token}))
            } else{
                const errorData = await response.json();
                console.error('Erreur :', response.statusText);
                setErrorMessage(errorData.message);
            }

        } catch (error) {
            console.error('Erreur :', error)
            setErrorMessage("an error has occured")
        }
    }

    return(
        <section className="sign-in-content">
            <i>{userIcon}</i>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} autoComplete="username" required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
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