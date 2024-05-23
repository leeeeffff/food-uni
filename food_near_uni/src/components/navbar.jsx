import React from 'react';
import logo from './image/navbar/food.jpg';
import leef from './image/navbar/leef.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='leftSide'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='middle'>
          <Link to="/"> Home </Link>
          <Link to="/Restaurants"> Restaurants </Link>
          <Link to="/Contacts"> Contacts </Link>
        </div>
        <div className='rightSide'>
          <img src={leef} alt="Leef" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
