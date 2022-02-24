import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Nav.css"

export default function Navbar(){
    return (
        <nav className="navbar sticky-top">
  <div className="container-fluid">
    <div>
    <div className="navbar-brand">Logo</div>
    </div>
    <div className="d-flex justify-content-between">
    <Link className="a" to="/">Home&nbsp;&nbsp;</Link>
    <Link className="a" to="/blog">Blog&nbsp;&nbsp;</Link>
    <Link className="a"to="/contact">Contact&nbsp;&nbsp;</Link>
    </div>
    <Outlet />
  </div>
</nav>
    )
}