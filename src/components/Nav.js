import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Nav.css"
import logo from "../images/arya_logo.png"

export default function Navbar(){
    return (
        <nav className="navbar navbar-default mb-5 pt-0 mt-0">
<div className="container-fluid">
    <div>
    <div className="navbar-brand"><img className="logo" src={logo} alt="Arya's Logo" /></div>
    </div>
    <div className="d-flex justify-content-between">
    <Link className="a" to="/">Home&nbsp;&nbsp;</Link>
    <Link className="a"to="/contact">Contact&nbsp;&nbsp;</Link>
    </div>
    <Outlet />
    </div>
</nav>
    )
}