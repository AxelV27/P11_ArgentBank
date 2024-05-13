import React from "react";
import Form from "../../components/form";
import '../../css/pages/Login.css';

export default function Login (){
    return(
        <div className="sign-in-page">
            <main className="bg-dark">
                <Form />
            </main>
        </div>
    )
}