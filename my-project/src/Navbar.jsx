import React from 'react'
import { Link, Outlet } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/loop"}>Loop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/course"}>Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/reactbootstrap"}>React Bootstrap</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/usestate"}>UseState</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/useref"}>UseRef</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/useeffect"}>UseEffect</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/form"}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/validation"}>Form Validation</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    
  )
}

export default Navbar
