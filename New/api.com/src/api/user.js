import React from "react";

const User=(props)=>{
    return(
        <>
        <div>
            <h3>{props.name}</h3>
            <h4>{props.gender}</h4>
            <h4>{props.id}</h4>
            <img src={props.image}/>
            <img src={props.image2}/>
            <img src={props.thumbnail}/>
        </div>
        </>
    )
}
export default User;