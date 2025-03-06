import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar2() {
  return (
    <>
        <div className="conitainer">
    <nav class="navbar navbar-expand-lg bg-dark   " >
  <div class="container-fluid ">
    <NavLink class="navbar-brand me-5" to="/"> 
         
    <div className='div-logo-des'>
    <img src="images/logo-2.png" className='logo-img' alt="" srcset="" />
    </div>
    <div className='div-logo-mob'>
    <img src="images/logo3.png" className='logo-img-mob' alt="" srcset="" />
    </div>
        
        
    </NavLink>




    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse mob-nav navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" href="#">HOME
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="#">CORPORATE</NavLink>
        </li><li class="nav-item">
          <NavLink class="nav-link" href="#">ROOMS</NavLink>
        </li>
        <li class="nav-item dropdown">
          <NavLink class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MEMBERSHIP &#11206;
          </NavLink>
          <ul class="dropdown-menu">
            <li><NavLink class="dropdown-item" href="#">SILVER </NavLink></li>
            <li><hr class="dropdown-divider"/></li>

            <li><NavLink class="dropdown-item" href="#">GOLD</NavLink></li>
            <li><hr class="dropdown-divider"/></li>
            <li><NavLink class="dropdown-item" href="#"> PLATINUM</NavLink></li>
          </ul>
        </li>
        {/* <li class="nav-item">
          <NavLink class="nav-link " aria-disabled="true">OFFERS</NavLink>
        </li> */}
      </ul>
      <ul class="navbar-nav me-end mb-2 mb-lg-0">
      <li class="nav-item">
          <NavLink class="nav-link " aria-disabled="true">LOGIN/JOIN</NavLink>
        </li>
      </ul>
       
      <button class="btn " type="submit">BOOK A STAY</button>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form> */}
    </div>
  </div>
</nav>
</div>
    </>
  )
}
