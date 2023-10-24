import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import "../styles/base.css";
import "../styles/default.css";

export default function Navbar() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="typecafe" className="logo"></img>
      </Link>
      <div className="nav">
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
