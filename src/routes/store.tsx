import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

export default function Store() {
  return (
    <div className="layout">
      <div className="content">
        <Navbar />

        <div className="main"></div>

        <Footer />
      </div>
    </div>
  );
}
