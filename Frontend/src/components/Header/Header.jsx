import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleAuthClick() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src="data:image/png;base64,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"
            alt="Evangadi Logo"
          />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/how-it-works">How it Works</Link>
        <button className="btn" onClick={handleAuthClick}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
