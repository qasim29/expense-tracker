import "./History.css";
import Transaction from "./Transaction";

const History = (Prop) => {
  return (
    <div className="hContainer">
      <div>
        <h1>History</h1>
      </div>
      <hr></hr>
      <div>
        <Transaction></Transaction>
      </div>
    </div>
  );
};

export default History;
