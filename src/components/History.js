import "../styles/History.css";
import Transaction from "./Transaction";

const History = (props) => {
  return (
    <div className="hContainer">
      <div>
        <h1>History</h1>
      </div>
      <hr></hr>
      <div>
        {props.expenses.map((expenses) => (
          <Transaction
            title={expenses.title}
            amount={expenses.amount}
            status={expenses.status}
            date={expenses.date}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
