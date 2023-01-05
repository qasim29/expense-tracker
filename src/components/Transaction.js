import "../styles/Transaction.css";
import Card from "./Card";
import React, { useState } from "react";
function Transaction(props) {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("twerrew");
    console.log(title);
  };

  return (
    <Card className="transaction">
      <div id="status"></div>

      <div className="values">
        <h4 id ="date">{new Date().toUTCString().split('2023')[0]}</h4>
        <h4 id="name">{title}</h4>
        <h4 id="ammount">{props.amount}</h4>
      </div>
      
      <div>
        <button className="button" onClick={clickHandler}>X</button>
      </div>
    </Card>
  );
}

export default Transaction;
