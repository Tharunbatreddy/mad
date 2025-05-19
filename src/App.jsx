import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./App.css";
import ContactMe from "./Components/ContactMe";

function App() {
  const [contact, setcontact] = useState(false);

  const handleConact = () => {
    setcontact((prevContact) => !prevContact);
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">M</div>
        <ul className="nav-Links">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/Pages">Pages</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">It's me</span>
          <h1>Madhan Reddy Mettukuru</h1>
          <p>
            Software Engineer <span> and</span>{" "}
            <span className="designer">Full Satck</span>{" "}
            <span className="developer">Developer</span>
          </p>
          <button className="hire-btn" onClick={handleConact}>
            Contact
          </button>
          {contact && <ContactMe />}
        </div>
        <div className="hero-image">
          <img src="/madhan.png" alt="Madhan M" />
        </div>
      </section>
    </div>
  );
}

export default App;
