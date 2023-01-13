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
  //   status:"DEDUCT"
  // },
];

function App() {
  const [expenses, setExpense] = useState(dummy_Expenses);
  const [income, setIncome] = useState(0);
  const [kharcha, setKharcha] = useState(0);
  const [bamount, setBAmount] = useState(0);

  const addExpense = (expense) => {   
      setBalance(expense);
      setExpense((prevState) => {
      const arr = [expense, ...prevState];
      // console.log(arr);
      return arr;
    });
  };
  const deleteExpense = (id) => {
    let o={};
    setExpense((prevState) => {
      const ex = prevState.filter((obj) => {
         if(obj.id !== id){
            return true;
         }
         o=obj;
         return false;
      });
      // console.log(ex);
      revertBalance(o)
      return ex;
    });
  };
  
  const revertBalance = (obj) => {
    obj.status === "DEDUCT"
    ? setKharcha((prevState) => {
      setBAmount((prevState2) => prevState2+parseFloat(obj.amount));
      return prevState - parseFloat(obj.amount)
    })
    : setIncome((prevState) => {
      setBAmount((prevState2) => prevState2-parseFloat(obj.amount));
      return prevState - parseFloat(obj.amount)
    });
    
  }

  const setBalance = (expense) => {
    expense.status === "DEDUCT"
    ? setKharcha((prevState) => {
      setBAmount((prevState2) => prevState2-parseFloat(expense.amount));
      return prevState + parseFloat(expense.amount)
    })
    : setIncome((prevState) => {
      setBAmount((prevState2) => prevState2+parseFloat(expense.amount));
      return prevState + parseFloat(expense.amount)
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
          <span style={{ color: (12, 198, 12) }}>${parseFloat(bamount).toFixed(1)}</span>
        </h4>
      </div>
      <div id="container3">
        <StatsPanel income={parseFloat(income).toFixed(1)} kharcha={parseFloat(kharcha).toFixed(1)}></StatsPanel>
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
