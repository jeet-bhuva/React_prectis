import React from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom"
import Home from "../component/Home";
import About from "../component/About";
import NavBar from "../component/NavBar";
import User from "../component/User";
import Filter from "../component/Filter";
import Contect from "../component/Contect";
import Company from "../component/Company";
import Channel from "../component/Channel";
import Other from "../component/Other";
import Login from "../component/Login";
import ProtectedRout from "../component/ProtectedRout";

function Routers() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProtectedRout Component={Home}/>} />
        <Route path="/about" element={<ProtectedRout Component={About}/>} /> 
        <Route path="/user/:name" element={<User />} /> 
        <Route path="/filter" element={<ProtectedRout Component={Filter}/>} /> 
        <Route path="/*" element={<Navigate to='/' />} /> 
        <Route path="/contect/" element={<Contect />}>
          <Route path="company" element={<Company />}/>
          <Route path="channel" element={<Channel />}/>
          <Route path="other" element={<Other />}/>
        </Route>
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>

  )
}

export default Routers