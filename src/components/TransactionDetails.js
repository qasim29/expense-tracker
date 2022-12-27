import "../styles/TransactionDetails.css";

const TransactionDetails = () => {
  return (
    <div className="transaction-details">
      <form>
        <label>Title</label>
        <input type="text" name="title" placeholder="Title" />
        <label>Amount</label>
        <input type="text" name="amount" placeholder="Amount" />
        {/* radio buttons */}
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> 
          <label for="html">HTML</label>
          <br></br>
        </div>

        <div>
          <input type="radio" id="css" name="fav_language" value="CSS" /> 
          <label for="css">CSS</label>
          <br></br>
        </div>


        {/* button */}
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default TransactionDetails;
