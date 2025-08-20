import React,{useContext,useState} from "react";
import { Contentcontext } from "./createcontext";
import Addtocart from "./addtocart";

function List(props){
    let context =useContext(Contentcontext);
    let click=()=>{  
        context.setTotal(context.total+parseFloat(props.price))
        context.changePrice(props.price);
    }
    return(
        <>
        <div>
            <h2>{props.title}</h2>
            <h3>${props.price}</h3>
            <button onClick={()=>{
                click();
            }}>Add to cart</button>
            
        </div>
        
        </>
    )
}

export default List;