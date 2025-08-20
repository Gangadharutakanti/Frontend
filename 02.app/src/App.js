
import './App.css';
import Timer from "./timer";
import React,{ useEffect , useState } from "react";
/*import Create from "./another";


function App() {
  const [count,setvalue]=useState(0);
  const [isflag,setflag]=useState(true);
  useEffect(() => {
    console.log("monitoring..")
  },[])
  useEffect(()=>{
    console.log("upgrading..",count);
    return ()=>{
      console.log("returned one :",count);
    }
  },[count])
  
  return (
    
    <div className="App">
      <button onClick={()=>{
        setflag(!isflag)}}> toggle</button>
      {isflag?<Create/>:<></>}
      <h3>count = {count}</h3>
      <button onClick={()=>{
        setvalue(count+1);
      }} >upgrade</button>
    </div>
  );
}

export default App;*/
function App(){
  return(
    <div>
      <Timer/>
      <strong>
        
        Done
      </strong>
    </div>
  )
}
export default App;