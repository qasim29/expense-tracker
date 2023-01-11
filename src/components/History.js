import "../styles/History.css";
import Transaction from "./Transaction";

const History = (props) => {
 

  let transactions = props.expenses.length === 0 && <h3 style={{color:"red"}}>No Transactions Found !!!</h3> 
 
  if(props.expenses.length > 0){
    transactions = props.expenses.map((expenses) => (
      <Transaction
        key={expenses.id}
        id={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        status={expenses.status}
        date={expenses.date}
        deleteExpense={props.deleteExpense}
      />
    ))
  } 
 
 
  return (
    <div className="hContainer">
      <div>
        <h1>History</h1>
      </div>
      <hr></hr>
      <div>
        {transactions}
      </div>
    </div>
  );
};

export default History;
