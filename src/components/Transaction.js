  import "../styles/Transaction.css";

function Transaction(Prop) {
  return (
    <div className="transaction">
      <div className="values">
        <h4 id="name">Prop.name</h4>
        <h4 id="ammount">Prop.ammount</h4>
      </div>
      <div id="status"></div>
    </div>
  );
}


export default Transaction;
