import React,{useState,useEffect} from "react";
 
function Timer(){
    let ifflag=false;
    let [time,changetime]=useState(0);
    useEffect(()=>{
        let num=time;
        const timer=setInterval(()=>{changetime(time+1)},1000);
        return()=>{
            clearInterval(timer);
        }
       
    },[time]);
    return(
        <div>
            <h1>STOP CLOCK</h1>
            <h1>count-{time}</h1>
        </div>
    )
}

export default Timer;