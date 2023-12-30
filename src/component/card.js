import React from "react";
import star from "../image/Star 1.png";

export default function Card(props) {

    let badgetext
    if(props.item.openspot===0)
    {
        badgetext="SOLD OUT"
    }else if(props.item.location==="ONLINE")
    {
        badgetext="ONLINE"
    }
    return (

        <div className="card">
            {badgetext && <div className="card-badge">{badgetext}</div>}
            <img src={props.item.coverimg} alt="" className="card-image"  />
            <div className="card-stats">
                <img className="card-star" src={star} alt="" />
                <span className="greey">{props.item.stats.rating}</span>
                <span className="greey">({props.item.stats.reviwcount}) .</span>
                <span>{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p>
            <span className="bold">from ${props.item.price}</span> / person
            </p>
        </div>

        
            
        
        
);
}

