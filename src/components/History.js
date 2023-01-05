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
        <Transaction 
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          ></Transaction>
      </div>
      <div>
      <Transaction 
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          ></Transaction>
      </div>
      <div>
      <Transaction 
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          ></Transaction>
      </div>
    </div>
  );
};

export default History;
