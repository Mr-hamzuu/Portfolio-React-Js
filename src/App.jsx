import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Services from "./components/services";
import About from "./components/about";
import Contact from "./components/contact";
import NotFound from "./components/error404";
export default function App() {
  return (
    <div className="bg-[#1b2a2f] min-h-screen  w-full text-white font-roboto">
      {/* Navbar */}
      <div className="">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
