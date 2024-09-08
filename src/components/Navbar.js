import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Campaigns</Link></li>
        <li><Link to="/create">Create Campaign</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
