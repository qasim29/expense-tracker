import logo from "./logo.svg";
import "./App.css";
import StatsPanel from "./components/StatsPanel";
import History from "./components/History";


function App(Prop) {
  return (
    <div className="App">
      <div id="container1">
        <h1>Expense Tracker</h1>
      </div>
      <div id="container2"> 
        <h6>YOUR BALANCE</h6>
        <h4>$23</h4>
      </div>
      <div id="container3">
        <StatsPanel></StatsPanel>
      </div>
      <div id="container4">
        <History></History>
      </div>
    </div>
  );
}

export default App;
