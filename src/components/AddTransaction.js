
import TransactionDetails from './TransactionDetails';
import '../styles/AddTransaction.css';
    
const AddTransaction = (props) => {
    return (
        <div className="add-transaction">   
            <div>
                <h3>Add new Transaction</h3>
            </div>
            <hr></hr>
            <div>
                <TransactionDetails addExpense={props.addExpense}></TransactionDetails>
            </div>
        </div>
    );
}

export default AddTransaction;