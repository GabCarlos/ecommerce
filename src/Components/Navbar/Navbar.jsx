import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

function Navbar(){

  const [ menu, setMenu ] = useState( '' );

  return (
    <div className='navbar'>
      <div className='navLogo'>
        <img src={ logo } alt=''/>
        <p> SHOP </p>
      </div>
      <ul className='navMenu'>
        <li onClick={ ()=> { setMenu('shop') }}> <Link style={{textDecoration: 'none' }} to='/'> Shop </Link> { menu==='shop'?<hr/>:<></> } </li>
        <li onClick={ ()=> { setMenu('mens') }}> <Link style={{textDecoration: 'none' }} to='/mens'> Men </Link> { menu==='mens'?<hr/>:<></> } </li>
        <li onClick={ ()=> { setMenu('womens') }}> <Link style={{textDecoration: 'none' }} to='/womens'> Women </Link> { menu==='womens'?<hr/>:<></> } </li>
        <li onClick={ ()=> { setMenu('kids') }}> <Link style={{textDecoration: 'none' }} to='/kids'> Kids </Link> { menu==='kids'?<hr/>:<></> } </li>
      </ul>
      <div className='navLoginCart'>
       <Link to='/Login'> <button> Login </button> </Link>
       <Link to='/Cart'> <img src={cart_icon} alt=''/> </Link> 
        <div className='navCartCount'> 0 </div>
      </div>
    </div>
  );
};

export default Navbar;
