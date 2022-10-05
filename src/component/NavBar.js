import {NavLink } from "react-router-dom"

function NavBar() {
    return (
        <>
            <div className="hedar">
                <h4><NavLink className="nev-bar-link" to="/">Home</NavLink></h4>
                <h4 style={{ marginLeft: "60px" }}><NavLink className="nev-bar-link" to="/about">About</NavLink></h4>
                <h4 style={{ marginLeft: "60px" }}><NavLink className="nev-bar-link" to="/contect">Contect</NavLink></h4>
                <h4 style={{ marginLeft: "60px" }}><NavLink className="nev-bar-link" to="/filter">Filter</NavLink></h4>
                <h4 style={{ marginLeft: "60px" }}><NavLink className="nev-bar-link" to="/login">Login</NavLink></h4>
            </div>

            {/* <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contect'>Contect</a></li> */}

        </>
    )
}

export default NavBar