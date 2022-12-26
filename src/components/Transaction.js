import "./Transaction.css";

function Transaction(Prop) {
  return (
    <div className="transaction">
      <h4 id="name">Prop.name</h4>
      <h4 id="ammount">Prop.ammount</h4>
    </div>
  );
}

export default Transaction;
