import React from "react";
import { Link } from "react-router-dom";

const Toolbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="logo.png"
          height="150"
          width="150"
          alt="Bakery && Developers"
        />
        <Link to="/"></Link>
      </div>
      <div className="btn-box">
        <Link to="/Cakes" className="btn btn-toolbar">
          עוגות
        </Link>
        <Link to="/Cookies" className="btn btn-toolbar">
          עוגיות
        </Link>
        <Link to="/Breads" className="btn btn-toolbar">
          לחמים
        </Link>
      </div>

      <div>
        <button className="btn btn-toolbar">לסל הקניות</button>
      </div>
    </header>
  );
};

export default Toolbar;
