
import React from "react";
import Header from "./header";
import Todoitem from "./todoitem";
import Button from "./Button";
import Search from "./search";
import Another from "./another";
import Name from "./name";
import "./style.css";

const App=()=>{
  return (
    <div className="todo-continer">
      <Another text="ganga"/>
      <Name/>
      <Header />
      <Search/>
      <Todoitem/>
      <Todoitem/>
      <Todoitem/>
      <Todoitem/>
      <Todoitem/>
      <Button/>
     
    </div>
  );
};
console.log("gangadhar");
export default App;
