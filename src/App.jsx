import React, { useState } from "react";
import { Link, Router, Route } from 'wouter';

import ListCards from "./pages/ListCards";
import AddCard from "./pages/AddCard";
import EditCard from "./pages/EditCard";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Flashcard App</a>
          <button className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">Manage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/add">Add</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Router>
          <Route path="/" component={ListCards} />
          <Route path="/add" component={AddCard} />
          <Route path="/edit/:id" component={EditCard} />
        </Router>
      </div>
    </>



  );
}
export default App;