import React,{useState} from "react";

function Condition (props){
    const [count,setCount]=useState(67);
    return(
        <div>
            <p>{props.text}</p>
            <p>count is-{count}</p>
            <p>name={val}</p>
            <button onClick={()=>{
                setCount(function setCount(count){
                    count=count+1;
                    return count;
                });
            }}>click me!</button>

        </div>
    )
    
}

export default Condition;
