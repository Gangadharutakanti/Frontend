
import './App.css';
import List from "./modules/list";
import Addtocart from "./modules/addtocart";

function App() {
  return (
    <div className="App">
      <List title="Mac book pro" price="100000"/>
      <List title="Pen drive" price="40000"/>
      <List title="Watch" price="1000"/>
      <Addtocart/>
    </div>
  );
}

export default App;
