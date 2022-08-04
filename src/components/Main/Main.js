import React from "react";
import Card from "../Card/Card";
import Data from "../../Data/Data"
import './Main.css'

const Main = () => {
    const cards = Data.map(item=>{
        return(
            <Card 
                state={item.state}
                name={item.name}
                date={item.dates}
                img={item.image}
                googleMap={item.googleMapLink}
                description={item.description}
            />
        )
    })
    return(
        <div className="main--cards">
                {cards}
        </div>
    )
}

export default Main