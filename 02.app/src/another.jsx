import React,{useEffect} from "react";

function Create(){
    useEffect(()=>{
        console.log("ican");
        return ()=>{
        console.log("another function going back");
        }
    },[])
    return(
        <div>
            <h1>today</h1>
        </div>
    )
}

export default Create;