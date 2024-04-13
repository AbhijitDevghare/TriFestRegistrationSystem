import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Description from "../Description/Description";
import Login from "../Login/Login";
import Register from "../Register/Register";
import About from "../About/About";
import AdminOptions from "../Admin/AdminOptions";
import ImageDelete from "../ImageDelete/ImageDelete";
import Account from "../Account/UserAccount";

function CustomRoute() {

  return (
    <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Home/>} />
          <Route path="/:comp_id" element={<Description/>} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminOptions/>} />
          <Route path="/deleteImage/:imageId" element={<ImageDelete/>} />
          <Route path="/account" element={<Account/>}/>

    </Routes>
  );
}

export default CustomRoute;
