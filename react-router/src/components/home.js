import { useNavigate } from 'react-router-dom';
export const Home=()=>{
    const navigate=useNavigate();
    return(
        <>
        <h1>Home</h1>
        <h1 onClick={()=>{
            navigate("order-summary")
        }}><button>place order</button></h1>
        <button className='App-logo'>King</button>
        </>
    )
}