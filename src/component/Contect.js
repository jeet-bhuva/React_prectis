import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Contect() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{backgroundColor:'deepskyblue',margin:"20px"}}>~ Contect Page ~</h1>
            <ul className='contectNav'>
                {/* <Link to='company'>Company</Link>
                <Link to='channel'>Channel</Link>
                <Link to='other'>Other</Link> */}
                <h4 style={{ marginLeft: "60px", fontSize: "20px" }}><NavLink to="company">Company</NavLink></h4>
                <h4 style={{ marginLeft: "60px", fontSize: "20px" }}><NavLink to="channel">Channel</NavLink></h4>
                <h4 style={{ marginLeft: "60px", fontSize: "20px" }}><NavLink to="other">Other</NavLink></h4>

            </ul>

            <Outlet />
        </div>
    )
}

export default Contect