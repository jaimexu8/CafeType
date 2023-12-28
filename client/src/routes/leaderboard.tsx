import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import "../styles/base.css";
import "../styles/theme.css";

export default function Leaderboard() {
  const selectTheme = (state: RootState) => state.theme.value;
  const currentTheme = useSelector(selectTheme);

  return (
    <div className="layout" id={currentTheme}>
      <div className="content">
        <Navbar />

        <div className="main">
          <h1>Page under development</h1>
        </div>

        <Footer />
      </div>
    </div>
  );
}
