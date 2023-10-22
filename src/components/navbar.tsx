import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/default.css";
import logo from "../assets/Logo.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" id="logo"></img>
        </Link>
      </div>
      <div className="menu">
        <Link className="textButton" to="/">
          home
        </Link>
        <Link className="textButton" to="/leaderboard">
          leaderboard
        </Link>
        <Link className="textButton" to="/store">
          store
        </Link>
        <Link className="textButton" to="/login">
          login
        </Link>
      </div>
    </div>
  );
}
