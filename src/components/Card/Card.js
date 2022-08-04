import React from "react";
import "./Card.css"

const Card = (props) => {
    console.log("Props", props)
    return (
        <div className="card">
            <div className="image">
                <img src={`/Images/${props.img}`} alt="Image Comes Here" />
            </div>
            <div className="info">
            <p className="state"><img src="/Images/marker.png"/>{props.state} <span><a href="#">Google Map Link</a></span></p>
            <h1>{props.name}</h1>
            <p className="date">{props.date}</p>
            <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;