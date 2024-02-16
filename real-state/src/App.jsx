import { Route, Routes } from "react-router-dom";
import "./App.css";
// Imports Pages and components
import Home from "./Pages/Home";
import AddForm from "./Components/AddForm";
import EditForm from "./Components/EditForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddForm" element={<AddForm />} />
        <Route path="/EditForm" element={<EditForm />} />
      </Routes>
    </>
  );
}

export default App;
