import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

export default function Store() {
  return (
    <div id="app">
      <div id="centerContent">
        <Navbar />

        <div className="middle"></div>

        <Footer />
      </div>
    </div>
  );
}
