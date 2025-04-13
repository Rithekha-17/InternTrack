import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import StudentHome from "./components/Student/StudentHome";
import AddInternship from "./components/Student/AddInternship";
import EditInternship from "./components/Student/EditInternship";
import CoordinatorHome from "./components/Coordinator/CoordinatorHome";
import ViewAll from "./components/Coordinator/ViewAll";
import DeleteRecord from "./components/Coordinator/DeleteRecord";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student/home" element={<StudentHome />} />
        <Route path="/student/add" element={<AddInternship />} />
        <Route path="/student/edit" element={<EditInternship />} />
        <Route path="/coordinator/home" element={<CoordinatorHome />} />
        <Route path="/coordinator/view" element={<ViewAll />} />
        <Route path="/coordinator/delete" element={<DeleteRecord />} />
      </Routes>
    </Router>
  );
}
