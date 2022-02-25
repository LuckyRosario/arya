import "./App.css"
import * as React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/Home"
import Blog from "./views/Blog"
import Contact from "./views/Contact"

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
