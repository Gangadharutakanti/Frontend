import React,{useState} from "react";
import Square from "./square";

function Board(){
    const [state,stateChange]=useState(Array(9).fill(null));
    let [isflag,setflag]=useState(true);
    
  

    function checkWinner(){
        
    let winningset=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    for (const [a,b,c] of winningset){
        if(state[a]!=null&&state[a]===state[b]&&state[b]===state[c]){
            return state[a];
        }
      
    }
    return false;
    }

    const winner=checkWinner();

    function handlestate(index){
        if(state[index]!==null){
            return;
        }
        const copystate=[...state];
        copystate[index]=isflag?"x":"o";
        setflag(!isflag);
        stateChange(copystate);
        
    }

    const handlereset=()=>{
        stateChange(Array(9).fill(null))
    }

    return(
        <div className="main-box"  >
            {winner?
            <>
                <p className="winner-para" >{winner} won the Game<button className="Button-playagain"onClick={handlereset} >Play Again</button></p>
            </> 
            :
            <>
              
            {isflag?<h3 style={{color:"#FFA07A"}}>player X please move</h3>:<h3 style={{color:"#00FFFF"}}>player O please Move</h3>}

            <div className="row-board" >
                    <Square  onClick={
                        ()=>{
                             handlestate(0);
                        }
                    }  value={state[0]}/>
                    <Square onClick={
                        ()=>{
                             handlestate(1);
                        }}
                        value={state[1]}/>
                    <Square onClick={
                        ()=>{
                             handlestate(2);
                        }} value={state[2]}/>
            </div>
            <div className="row-board">
                {winner}
                    <Square onClick={
                        ()=>{
                             handlestate(3);
                        }} value={state[3]}/>
                    <Square onClick={
                        ()=>{
                             handlestate(4);
                        }} value={state[4]}/>
                    <Square onClick={
                        ()=>{
                             handlestate(5);
                        }}value={state[5]}/>
            </div>
            <div className="row-board">
                    <Square onClick={
                        ()=>{
                             handlestate(6);
                        }} value={state[6]}/>
                    <Square onClick={
                        ()=>{
                             handlestate(7);
                        }}value={state[7]}/>
                    <Square onClick={
                        ()=>{
                             handlestate(8);
                        }} value={state[8]}/>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <button style={{margin:"20px",color:"pink",background:"green",fontSize:"3vh",borderRadius:"5px",border:"none"}} onClick={handlereset}>Reset</button>
            </div>
            
            
            </>}
            
        </div>
    )
}

export default Board;