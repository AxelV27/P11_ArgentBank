import React from "react";
import Banner from "../../components/banner";
import Item from "../../components/items";
import ItemData from "../../data/itemdata.json";
import iconChat from "../../assets/icons/icon-chat.webp";
import iconMoney from "../../assets/icons/icon-money.webp";
import iconSecurity from "../../assets/icons/icon-security.webp";
import '../../css/pages/Home.css';


export default function Home (){
    const imgData = {
        "icon-chat.webp" : iconChat,
        "icon-money.webp": iconMoney,
        "icon-security.webp": iconSecurity
    }
    return(
        <div className="homepage">
            <main>
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {ItemData.map((data) =>(
                    <Item 
                        key={data.id}
                        image={imgData[data.image]}
                        imageDescription={data.imageDescription}
                        title={data.title}
                        description={data.description}
                    />
                ))}
            </section>
            </main>
        </div>
        
    )
}