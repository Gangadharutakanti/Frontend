import React,{useEffect, useState} from "react";
import './App.css';
import GetUser from "./api/index";
import User from"./api/user";
  

function App() {
  let [user,userChange]=useState(null);
  let [count,changecount]=useState(0);

    useEffect(()=>{
      GetUser().then((resolve)=>{
        console.log(resolve.results[0]);
        userChange(resolve.results[0]);
      })
    
    const interval=setInterval(()=>{changecount(count+1)},2000);
    return ()=>{
      clearInterval(interval);
    }
  }
    ,[count])

      function Restore(){
        GetUser().then((resolve)=>{
          userChange(resolve.results[0]);
        })
      }

  return(
    <>
    <div>
      {user?(<User name={user.name.last} image={user.picture.large} image2={user.picture.medium} gender={user.gender} id={user.email} thumbnail={user.picture.thumbnail}/>):<p>null</p>}
      <button onClick={()=>{
        Restore()
      }}><h1>Refresh</h1></button>
    </div>
    </>
  )
}


export default App;
