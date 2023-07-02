import React from 'react';
import './Navbar.css';
 import Logo from './Logo.png';


function Navbar() {
  return (
    <>
   {
   
   <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#">
      <img src={Logo}  width="180" height="120" class="d-inline-block align-text-top"/>
         THE MORNING NEWS
    </a>
  </div>
</nav> }
   
    
    </>
  );
}

export default Navbar;

