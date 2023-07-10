
import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import Form from "./components/Form"
import Formdetails from "./components/Formdetails"
import Preview from "./components/Preview"

import Mainnav from './components/Mainnav';
import Topnav from './components/Topnav';
import Register from './components/Register';
import Login from './components/Login'




const App =() => {
  return (
    <React.Fragment>
    <Topnav />
    <Mainnav />
    <Routes>
        <Route exact="true" path="/" element={<Home />}></Route>
        <Route exact="true" path="/dashboard" element={<Dashboard />}></Route>
        <Route exact="true" path="/form" element={<Form />} />
        <Route exact="true" path="/formdetails" element={<Formdetails />}></Route>
        <Route exact="true" path="/preview" element={<Preview />}></Route>
         <Route exact="true" path="/register" element={<Register />}></Route>

        <Route exact="true" path="/login" element={<Login />}></Route> 

      </Routes>
    </React.Fragment>
  );
};

export default App;
