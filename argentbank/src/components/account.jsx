import React from "react";
import '../css/components/account.css'

export default function Account (props){
    return(
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{props.title}</h3>
                <p className="account-amount">{props.amount}</p>
                <p className="account-amount-description">{props.description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transaction</button>
            </div>
        </section>
    )
}