import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from './pages/WApp.js';
// import CurrencyConv from './pages/CurrencyConv.js';
// import TodoApp from "./pages/TodoApp.js"
// import Game from "./pages/Game.js"
import NavBar from "./components/NavBar.js"

function Main() {
  return (
    <NavBar />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/main/td" element={<TodoApp />}></Route>
    //     <Route path="/main/WApp" element={<About />}></Route>
    //     <Route path="/main/cc" element={<CurrencyConv />}></Route>
    //     <Route path="/main/game" element={<Game />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default Main;