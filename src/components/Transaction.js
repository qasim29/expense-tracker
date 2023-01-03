import "../styles/Transaction.css";
import Card from "./Card";

function Transaction(Prop) {
  return (
    <Card className="transaction">
      <div className="values">
        <h4 id="name">Prop.name</h4>
        <h4 id="ammount">Prop.ammount</h4>
      </div>
      <div id="status"></div>
    </Card>
  );
}


export default Transaction;
