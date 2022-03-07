import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar";
import "./styles/App.scss";

function App() {
    return (
        <Router>
            <Navbar />
        </Router>
    );
}

export default App;
