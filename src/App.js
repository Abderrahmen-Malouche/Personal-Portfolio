import Navbar from "./Navbar/Navbar.jsx";
import "./App.css"
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Footer from "./Footer/Footer.jsx";
import Contact from "./Pages/Contact/Contact.jsx"
import Home from "./Pages/Home/Home.jsx";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
