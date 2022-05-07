import React from 'react';
import "./navbar.css"
import {Link} from "react-router-dom";

function Navbar() {
  return ( 
  <div className="navbar">
      <div className="leftside">
          <div className="links">
              <Link to="/" className='link1'>Top Rated</Link>
              <Link to="/Trending" className='link2'>Trending</Link>
              <Link to="/popular" className='link3'>Popular</Link>
          </div>
      </div>
  </div>
  )
}

export default Navbar;
