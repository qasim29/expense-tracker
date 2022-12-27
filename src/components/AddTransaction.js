
import TransactionDetails from './TransactionDetails';
import './AddTransaction.css';

const AddTransaction = () => {
    return (
        <div className="add-transaction">   
            <div>
                <h3>Add new Transaction</h3>
            </div>
            <div>
                <TransactionDetails></TransactionDetails>
            </div>
        </div>
    );
}

export default AddTransaction;