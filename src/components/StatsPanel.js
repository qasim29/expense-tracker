import './StatsPanel.css'
function StatsPanel() {
  return (
    <div className="StatsPanel">
      <div className="container">
        <div>
          <h3>Income</h3>
          <h4 style={{ color: "green" }}>$</h4>
        </div>
        <hr></hr>
        <div>
          <h3>Expense</h3>
          <h4 style={{ color: "red" }}>100.00</h4>
        </div>
      </div>
    </div>
  );
}

export default StatsPanel;