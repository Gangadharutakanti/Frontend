import react,{createContext,useState} from "react";

export const Contentcontext=createContext(null);

export const Contentprovider=(props)=>{
    const [count,setCount]=useState(0);
    const [total,setTotal]=useState(0);
    const[price,changePrice]=useState(0);
    return(
        <Contentcontext.Provider value={{count,setCount,total,setTotal,price,changePrice}}>
            {props.children}
        </Contentcontext.Provider>
     )
            
}
