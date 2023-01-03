import '../styles/StatsPanel.css'
import Card from './Card';

function StatsPanel() {
  return (
    <Card className="StatsPanel">
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
    </Card>
  );
}

export default StatsPanel;