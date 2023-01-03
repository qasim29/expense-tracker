import "./styles/App.css";
import StatsPanel from "./components/StatsPanel";
import History from "./components/History";
import AddTransaction from './components/AddTransaction';
import Card from "./components/Card";


function App(Prop) {
  return (
    <Card className="App">
      <div id="container1">
        <h1>Expense Tracker</h1>
      </div>
      <div id="container2"> 
        <h6>YOUR BALANCE</h6>
        <h4><span style={{color: (12, 198, 12)}}>$</span>23</h4>
      </div>
      <div id="container3">
        <StatsPanel></StatsPanel>
      </div>
      <div id="container4">
        <History></History>
      </div>
      <div id="container5">
        <AddTransaction></AddTransaction>
      </div>
    </Card>
  );
}

export default App;
