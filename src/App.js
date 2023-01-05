import "./styles/App.css";
import StatsPanel from "./components/StatsPanel";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import Card from "./components/Card";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "car",
      amount: 0,
      date: null,
    },
    {
      id: "e2",
      title: "yaucht",
      amount: 0,
      date: null,
    },
    {
      id: "e3",
      title: "jet",
      amount: 0,
      date: null,
    },
  ];

  return (
    <Card className="App">
      <div id="container1">
        <h1>Expense Tracker</h1>
      </div>
      <div id="container2">
        <h6>YOUR BALANCE</h6>
        <h4>
          <span style={{ color: (12, 198, 12) }}>$</span>23
        </h4>
      </div>
      <div id="container3">
        <StatsPanel></StatsPanel>
      </div>
      <div id="container4">
        <History expenses={expenses}></History>
      </div>
      <div id="container5">
        <AddTransaction></AddTransaction>
      </div>
    </Card>
  );
}

export default App;
