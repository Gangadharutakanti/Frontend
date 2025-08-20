import React from "react";

function Square(props){
    return (
        <div className="Square"  onClick={props.onClick}>
            <h3 style={{fontSize:"50px"}} >{props.value}</h3>
        </div>
    )
}

export default Square;