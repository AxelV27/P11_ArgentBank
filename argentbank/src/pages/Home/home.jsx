import React from "react";
import Banner from "../../components/banner";
import Item from "../../components/items";
import ItemData from "../../data/itemdata.json";
import iconChat from "../../assets/icons/icon-chat.png";
import iconMoney from "../../assets/icons/icon-money.png";
import iconSecurity from "../../assets/icons/icon-security.png";
import '../../css/pages/Home.css';


export default function Home (){
    const imgData = {
        "icon-chat.png" : iconChat,
        "icon-money.png": iconMoney,
        "icon-security.png": iconSecurity
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