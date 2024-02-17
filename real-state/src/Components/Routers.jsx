import React from "react";
import { Route, Routes } from "react-router-dom";
// Imports Pages and components
import Home from "../Pages/Home";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import DetailProperty from "./DetailProperty";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddForm" element={<AddForm />} />
        <Route path="/EditForm/:id" element={<EditForm />} />
        <Route path="/DetailProperty/:id" element={<DetailProperty />} />
      </Routes>
    </>
  );
}

export default Routers;
