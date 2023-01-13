import '../styles/StatsPanel.css'
import Card from './Card';

function StatsPanel(props) {
  return (
    <Card className="StatsPanel">
      <div className="container">
        <div>
          <h3>Total Income</h3>
          <h4 style={{ color: "green" }}>${props.income}</h4>
        </div>
        <hr></hr>
        <div>
          <h3>Total Expense</h3>
          <h4 style={{ color: "red" }}>${props.kharcha}</h4>
        </div>
      </div>
    </Card>
  );
}

export default StatsPanel;