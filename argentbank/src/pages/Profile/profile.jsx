import React, { useEffect } from "react";
import Account from "../../components/account";
import EditName from "../../components/editName";

import { useDispatch } from "react-redux";
import { setProfile } from "../../redux/features/profileSlice";
import'../../css/pages/Profile.css'

export default function Profile (){
    const dispatch = useDispatch()

    useEffect(() =>{
        const authenToken = localStorage.getItem('authenToken')
        if(authenToken){
            fetchProfileData(authenToken)
        }
    })

    async function fetchProfileData(authenToken){
        try{
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method: "POST",
                    headers: {
                        accept : 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authenToken}`
                    },
                });
                if(response.ok){
                const responseData = await response.json()
                dispatch(setProfile(responseData))
                } else{
                    console.error('Error :', response.statusText)
                }
        } catch (error){
            console.error('Error :', error)
        }
    }
    return(
        <main className="main bg-dark">
            <div className="header">
                <EditName />
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account
                title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" 
            />
            <Account
                title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" 
            />
            <Account
                title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" 
            />
        </main>
    )
}