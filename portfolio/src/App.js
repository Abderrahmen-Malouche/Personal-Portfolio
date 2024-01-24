import Navbar from "./Navbar/Navbar";
import "./App.css"
import Hero from "./Hero/Hero"
import { BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    <Routes>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
