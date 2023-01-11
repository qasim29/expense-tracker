import "../styles/Transaction.css";
import Card from "./Card";

function Transaction(props) {
  const clickHandler = () => {
    props.deleteExpense(props.id);
  };

  let tstatus = props.status === "DEDUCT" ? "status-red" : "status-green";

  return (
    <Card className="transaction">
      <div id={tstatus}></div>

      <div className="values">
        <h4 id="datek">{new Date().toUTCString().split("2023")[0]}</h4>
        <h4 id="name">{props.title}</h4>
        <h4 id="ammount">{props.amount}</h4>
      </div>

      <div>
        <button className="button" onClick={clickHandler}>
          X
        </button>
      </div>
    </Card>
  );
}

export default Transaction;
