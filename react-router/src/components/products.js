import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';

function Products() {
  return (
    <>
    <Outlet/>
    <input type="search" placeholder='search product' />
    <nav className='product-nav'>
        <NavLink to='featureproducts'>Featuredproducts</NavLink>
        <NavLink to='New'>New</NavLink>
       
    </nav>
    </>
  )
}

export default Products;