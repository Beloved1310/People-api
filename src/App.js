import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import SinglePerson from "./pages/SinglePerson";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="person/:id" element={<SinglePerson />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
