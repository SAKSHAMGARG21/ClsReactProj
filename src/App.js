// App.js
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Main.js";
import Signup from "./components/Signup";
import Login from "./components/Signin";
import FirstPage from "./firstpage"

import About from './pages/WApp.js';
import CurrencyConv from './pages/CurrencyConv.js';
import TodoApp from "./pages/TodoApp.js"
import Game from "./pages/Game.js"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<Mainpage />}>
                    {/* <Route path="/main/td" element={<TodoApp />}></Route>
                    <Route path="/main/WApp" element={<About />}></Route>
                    <Route path="/main/cc" element={<CurrencyConv />}></Route>
                    <Route path="/main/game" element={<Game />}></Route> */}
                </Route>


                <Route path="/main/td" element={<TodoApp />}></Route>
                <Route path="/main/WApp" element={<About />}></Route>
                <Route path="/main/cc" element={<CurrencyConv />}></Route>
                <Route path="/main/game" element={<Game />}></Route>
            </Routes>

        </BrowserRouter>
    );
}