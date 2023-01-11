import { useState } from "react";
import "./styles/App.css";
import StatsPanel from "./components/StatsPanel";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import Card from "./components/Card";

const dummy_Expenses = [
  // {
  //   id: "e1",
  //   title: "car",
  //   amount: 0,
  //   date: null,
  // },
];

function App() {
  const [expenses, setExpense] = useState(dummy_Expenses);

  const addExpense = (expense) => { 
    setExpense((prevState) =>{
      const arr= [expense,...prevState];    
      console.log(arr);
      return arr;
    });
  }
  const deleteExpense=(id)=>{
    setExpense((prevState)=>{
      const ex=prevState.filter(obj => obj.id !== id)
      console.log(ex);
      return ex;
    });

  }

  return (
    <Card className="App">
      <div id="container1">
        <h1>Expense Tracker</h1>
      </div>
      <div id="container2">
        <h6>YOUR BALANCE</h6>
        <h4>
          <span style={{ color: (12, 198, 12) }}>$</span>23
        </h4>
      </div>
      <div id="container3">
        <StatsPanel></StatsPanel>
      </div>
      <div id="container5">
        <AddTransaction addExpense={addExpense}></AddTransaction>
      </div>
 
      <div id="container4">
        <History expenses={expenses} deleteExpense={deleteExpense}></History>
      </div>
    </Card>
  );
}

export default App;
