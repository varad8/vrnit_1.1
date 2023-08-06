import React from 'react'
import logo from "./logoforblog.png"
function NavBar() {
  return (
   <nav className="navbar bg-body-tertiary shadow-lg sticky-top">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Bootstrap" width="30" height="30" className='d-inline-block align-text-top'/> VRNITSOLUTION
    </a>
  </div>
</nav>
  )
}

export default NavBar