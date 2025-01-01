import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/bill">Bill</Link></li>
                <li><Link to="/event">Event</Link></li>
                <li><Link to="/footer">Footer</Link></li>
                <li><Link to="/lead">Lead</Link></li>
                <li><Link to="/prospect">Prospect</Link></li>
                <li><Link to="/quotations">Quotations</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;