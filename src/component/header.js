import React from "react";
import touristimage from "../image/Group 77@3x.png";

export default function Header(){
    return(
        <section className="header">
            <img className="header-photo" src={touristimage} alt="" />
            <h1 className="header-main">ONLINE EXPERINCES</h1>
            <p className="header-text">JOIN UNIQUE INTERACTIVE ACTIVITIES LEAD BY ONE-OF-A-KIND HOSTS-ALL WITHOUT LEAVING HOME .</p>
        </section>
    )
}