// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Component/First";
import About from "./Page/About";
import Services from "./Page/Service";
import Stories from "./Page/Stories";
import Location from "./Page/Location";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} /> {/* Default page */}
        <Route path="/about"  element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
};

export default App;










