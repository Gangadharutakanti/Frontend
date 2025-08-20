import React from 'react'
import { useSearchParams } from 'react-router-dom';
function Details() {
    const [param,setsearchparam]=useSearchParams();
    const ok=param.get('filter')==='active';
    return(
        <>
        <button onClick={()=>{
            setsearchparam({filter:"active"})
        }}>Active button</button>
        <button onClick={()=>{
            setsearchparam({})
        }}>return button</button>
        {ok?<h2>active list</h2>:<h2>All list</h2>}
        </>
    )
}

export default Details;