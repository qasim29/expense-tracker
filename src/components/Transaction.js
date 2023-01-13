import "../styles/Transaction.css";
import Card from "./Card";

function Transaction(props) {
  const clickHandler = () => {
    props.deleteExpense(props.id);
  };

// write code for email validation using regex
  // CASE #1
  // let tstatus = props.status === "DEDUCT" ? "status-red" : "status-green";
  return (
    <Card className="transaction">
      {/* CASE #1 */}
      {/* <div id={tstatus}></div> */}


      {/*   // CASE #2 */}
      {props.status === "DEDUCT" ? (
        <div id="status-red"></div>
      ) : (
        <div id="status-green"></div>
      )}

      <div className="values">
        <h4 id="datek">{props.date}</h4>
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
