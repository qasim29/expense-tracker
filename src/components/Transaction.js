import "../styles/Transaction.css";
import Card from "./Card";

function Transaction(props) {
  return (
    <Card className="transaction">
      <div className="values">
        <h4 id="name">{props.title}</h4>
        <h4 id="ammount">{props.amount}</h4>
      </div>
      <div id="status"></div>
    </Card>
  );
}


export default Transaction;
