import React from "react";
import Navbar from "./component/navbar.js";
import Header from "./component/header.js";
import Card from "./component/card.js";
import Footer from "./component/footer.js";
import "./index.css";


import data from "./data.js";


export default function App() {

  const card = data.map(item=>{
    return(

      <Card
      key ={item.id}
      item={item}
    />

    )
  });
  return (
    <div>
      <Navbar />
      <Header />
      <section className="card-list">
        {card}
      </section>
      <Footer/>
    </div>
  );
}
