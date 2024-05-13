import React from "react";
import '../css/components/items.css';

export default function Item ({image, imageDescription, title, description}) {
    return (
        <div className="feature-item">
            <img src={image} alt={imageDescription} className="feature-item-icon"></img>
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    )
}