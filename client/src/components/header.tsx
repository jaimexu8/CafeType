import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";
import logo from "../assets/Logo.svg";

export default function Header() {
  const loginStatus = useSelector((state: RootState) => state.uid.value !== -1);

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/">
          <img src={logo} alt="typecafe" className="logo"></img>
        </Link>
        <div className="navbar">
          <Link className="textButton" to="/">
            home
          </Link>
          <Link className="textButton" to="/leaderboard">
            leaderboard
          </Link>
          <Link className="textButton" to="/store">
            store
          </Link>
          <Link className="textButton" to="/account">
            {loginStatus ? "account" : "login"}
          </Link>
        </div>
      </div>
    </header>
  );
}
