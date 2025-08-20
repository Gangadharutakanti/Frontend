import React,{useState,useContext} from "react";
import { Contentcontext } from "./createcontext";

function Addtoreact(){

    const context=useContext(Contentcontext);
    return(
        <>
        <div>
            <h2>
                Total:{context.total}
            </h2>
            {context.price!=0?(context.price==100000?(<h3>mac book pro-{context.price}</h3>):context.price==40000?(<h3>pen drive-{context.price}</h3>):(<h3>watch-{context.price}</h3>)):(<h3>no item</h3>)}
        </div>
        </>
    )
}

export default Addtoreact;