import React from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Home} from './components/home';

import { Nav } from './components/navlink';
import {Order} from './components/order';
import {Nopage} from './components/nopage';
import Products from './components/products';
import Featureproducts from './components/featuredproducts';
import New from './components/new';
import {User} from './components/user';
import Details from './components/details';
const About=React.lazy(()=>
import('./components/about')
);

function App() {
  return (
    <>
    <div className="App">
      <Nav/>
      <Routes>
       <Route path='/' element={ <Home/>}/>
        <Route path='about' element={
          <React.Suspense fallback={<div>loding....</div>}>
            <About/>
          </React.Suspense>
          }/>
        <Route path='products' element={<Products/>}>
          <Route index element={<New/>}/>
          <Route path='featureproducts' element={<Featureproducts/>}/>
          <Route path='New' element={<New/>}/>
        </Route>
        <Route path='user' element={<User/>}/>
        <Route path='length' element={<Details/>}/>
        <Route path='order-summary' element={<Order/>}/>
        <Route path='*' element={<Nopage/>}  />
      </Routes>
      
    
    </div>
    </>
  );
}

export default App;
