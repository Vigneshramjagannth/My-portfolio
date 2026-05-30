import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        background:
          "linear-gradient(to right, #141e30, #243b55)",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      {/* Logo */}
      <h1
        style={{
          color: "#f39c12",
          margin: 0,
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        Welcome to My Portfolio
      </h1>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <NavLink to="/" style={navStyle}>
          Home
        </NavLink>

        <NavLink to="/about" style={navStyle}>
          About
        </NavLink>

        <NavLink to="/info" style={navStyle}>
          Info
        </NavLink>

        <NavLink to="/contact" style={navStyle}>
          Contact me?
        </NavLink>
      </div>
    </nav>
  );
}

/* NavLink Style */

const navStyle = ({ isActive }) => ({
  color: isActive ? "#f39c12" : "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: isActive ? "bold" : "normal",
  transition: "0.3s",
});