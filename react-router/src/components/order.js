import React from 'react';
import { useNavigate } from 'react-router-dom';


export const Order = () => {
    const navigate=useNavigate();
  return (
    <div>
       <h1>order placed</h1>
       <button onClick={
        ()=>{
            navigate("/");
        }
       }>Go back</button>
    </div>
  )

}
