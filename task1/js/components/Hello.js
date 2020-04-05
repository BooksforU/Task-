import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, { Component, PropTypes,useState } from 'react'
import Navbar from "./Navbar.js"
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./Home.js"
import HomeCare from './HomeCare';
import Cart from "./Cart"
import Concierge from './Concierge';
import MedicalEquipment from './MedicalEquipment';
function Hello() {




    const initialCart = [];

    const [cart, setCart] = useState(initialCart);

    const addToCart = (service) => {
      setCart([...cart, service]);
    };
    const checkoutCart = () => {
      setCart([]);
    };
    const deleteItem = (index) => {
      setCart(cart.filter((el, i) => i !== index));
    };
console.log(setCart)

    
    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <main>
          <Route path="/concierge" component={() => <Concierge addToCart={addToCart} />} />
          <Route path="/homecare" component={() => <HomeCare addToCart={addToCart}  />} />
          <Route path="/equipment"  component={() => <MedicalEquipment addToCart={addToCart} />} />
          <Route path="/" exact component ={Home}/>
          <Route path = '/cart' component = {()=> <Cart deleteItem={deleteItem} checkoutCart={checkoutCart} cart={cart} />}/>
         
        </main>
      </div>
    </BrowserRouter>
    )
  }




export default Hello
