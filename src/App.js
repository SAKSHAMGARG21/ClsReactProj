import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/WApp.js';
import CurrencyConv from './pages/CurrencyConv.js';
import NavBar from "./components/NavBar.js"
import TodoApp from "./pages/TodoApp.js"
import Game from "./pages/Game.js"

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<TodoApp />}></Route>
          <Route path="/WApp" element={<About />}></Route>
          <Route path="/cc" element={<CurrencyConv />}></Route>
          <Route path="/game" element={<Game />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;