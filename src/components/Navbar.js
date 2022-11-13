import React from 'react';
import {  NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
           {/*<!--Navbar--> */}
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand pl-5" to="#">Retrogamershaven</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="#">Etusivu</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Lautapelit
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink className="dropdown-item" to="#">Afrikan tähti</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Kimble</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Monopoly</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Tammi</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Trivial Pursuit</NavLink></li>
                </ul>
              </li><li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Konsolipelit
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink className="dropdown-item" to="#">Tänne</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">niitä</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">tuotteita</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">vois</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">listata</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tietokonepelit
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink className="dropdown-item" to="#">Packman</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Outrun</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">tuotteita</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">vois</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">listata</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tarvikkeet
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink className="dropdown-item" to="#">Tänne</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">niitä</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">tuotteita</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">vois</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">listata</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Uutuudet
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink className="dropdown-item" to="#">Tänne</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">niitä</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">tuotteita</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">vois</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">listata</NavLink></li>
                </ul>
              </li>
              <div className="right">
                <ul>
                    
                  <NavLink to="Login page/" className="mt-2 btn btn-lg btn-outline-light" 
              role="button">Login!</NavLink>
                  
                    
              
                </ul>
            </div>
            </ul>
          </div>
        </div>
      

      <div className="bottom_nav" />
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto" />
        
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="#">Lahjakortit</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="#">Palautukset</NavLink>
          </li>
          <div className="search_bar">
            <input type="text" placeholder="Search" />
        </div>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">Asiakaspalvelu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">Ostoskori</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">Rekisteröidy</NavLink>
        </li>


      </div>
    </nav>
    {/* <!--Navbar loppuu--> */}
    </>
  )
}

export default Navbar