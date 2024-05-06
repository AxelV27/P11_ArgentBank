import React from "react";
import '../css/components/banner.css';

export default function Banner () {
    return(
        <div className="banner">
            <section className="hero-content">
            <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}