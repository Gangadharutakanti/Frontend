import { NavLink } from "react-router-dom";

export const Nav=()=>{
    const navstyle=({isActive})=>{
        return{
            backgroundColor: isActive ?  'pink':'black',
        }
    }
    return (
        <>
        <nav className="nav-bar">
            <NavLink style={navstyle} to='/'>home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='length'>user3</NavLink>
            <NavLink to='user'>user</NavLink>
        </nav>       
        </>
    )
}