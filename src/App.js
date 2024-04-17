import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from "./components/NavBar.js"

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;