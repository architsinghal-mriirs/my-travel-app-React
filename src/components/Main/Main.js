import React from "react";
import Card from "../Card/Card";
import Data from "../../Data/Data"

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
        <div>
       {cards}
        </div>
    )
}

export default Main