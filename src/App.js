import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Lead from './components/Lead';
import Prospect from './components/Prospect';
import Quotation from './components/Quotation';
import Bill from './components/Bill';
import Event from './components/Event';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <div className="sidebar">
          <h3>BansiCRM</h3>
          <ul className="nav flex-column">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/lead">Lead</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/prospect">Prospect</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/quotation">Quotation</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/bill">Bill</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/event">Event</Link></li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lead" element={<Lead />} />
            <Route path="/prospect" element={<Prospect />} />
            <Route path="/quotation" element={<Quotation />} />
            <Route path="/bill" element={<Bill />} />
            <Route path="/event" element={<Event />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
