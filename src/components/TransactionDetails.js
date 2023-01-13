import "../styles/TransactionDetails.css";
import Card from "./Card";
import React, { useState } from "react";
const TransactionDetails = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [rBtn, setRBtn] = useState("");

  // let variable="old";

  const clickHandler = (event) => {
    event.preventDefault();
    const expense = {
      id:Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount,
      status: rBtn,
      date: new Date().toLocaleString()
    }
    

    props.addExpense(expense);
// 
    setEnteredTitle(prevState=> "");
    setEnteredAmount(prevState=> "");
    // setRBtn(prevState=> "");
    // console.log(expense);
    // console.log(variable);    
    
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // variable = event.target.value;
    // console.log(variable);    
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const RadioBtnHandler = (event) => {
    setRBtn(event.target.value);
  };

  return (
    <Card className="transaction-details">
      <form>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={enteredTitle}
          placeholder="Title"
          onChange={titleChangeHandler}
        />
        <label>Amount</label>
        <input
          type="text"
          name="amount"
          value={enteredAmount}
          placeholder="Amount"
          onChange={amountChangeHandler}
        />
        {/* radio buttons */}
        <div>
          <input
            type="radio"
            id="html"
            name="rbtn"
            value="ADD"
            onChange={RadioBtnHandler}
          />
          <label >Add</label>
          <br></br>
        </div>

        <div>
          <input
            type="radio"
            id="css"
            name="rbtn"
            value="DEDUCT"
            onChange={RadioBtnHandler}
          />
          <label >Deduct</label>
          <br></br>
        </div>

        {/* button */}
        <input onClick={clickHandler} type="submit"/>
      </form>
    </Card>
  );
};

export default TransactionDetails;
