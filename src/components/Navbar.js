import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ handleSearch }) => {
  return (
    <nav>
      <div className="logo">MoviePanel</div>
      <div className="search">
        <input type="text" placeholder="Search movies..." onChange={handleSearch} />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/top-rated">Top Rated</Link></li>
        <li><Link to="/upcoming">Upcoming</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
